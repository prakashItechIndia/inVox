'use client';

import { NoDataFound } from '@/components/noData';
import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { SectionHeaderWithDescription } from '@/components/title-with-des';
import { useGetUsersList } from '@/hooks/rq/queries/useGetUsers';
import { Button } from '@shared/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@shared/components/ui/tabs';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { InvoxUserType } from 'shared';
import { AddEmail } from './email/addEdit';
import { Email } from './email/list';
import { FTPConfig } from './ftp/addEdit';
import { FTP } from './ftp/list';
import { CloudStorageConfig } from './googleOnedrive/addEdit';
import { WebhookConfig } from './webhook/addEdit';
import { Webhook } from './webhook/list';
import { CloudStorage } from './googleOnedrive/list';

type Props = {
  portalType: InvoxUserType;
};

const NavList = [
  { name: 'Email Server', key: 'email-server' },
  { name: 'FTP Server', key: 'ftp-server' },
  { name: 'Google/Onedrive', key: 'google-onedrive' },
  { name: 'Webhook', key: 'webhook' },
];

const TabContent = ({ currentTab, portalType }: { currentTab: string, portalType: InvoxUserType }) => {
  switch (currentTab) {
    case 'email-server':
      return <Email portalType={portalType} />;
    case 'ftp-server':
      return <FTP portalType={portalType} />;
    case 'google-onedrive':
      return <CloudStorage portalType={portalType} />;
    case 'webhook':
      return <Webhook portalType={portalType} />;
    default:
      return null;
  }
};

export const Configurations = observer(function(props: Props) {
  const { t } = useLanguageTranslation();
  const { portalType } = props;

  const { data, isLoading, error, refetch } = useGetUsersList(portalType);
  const [currentTab, setCurrentTab] = React.useState('email-server');
  const [addAndEdit, setAddAndEdit] = React.useState(
    false,
  );

  const common: {
    [key: string]: {
      title: string;
      description: string;
      host: string;
      url: string;
      action: string;
    };
  } = {
    'email-server': {
      action: t('SETTINGS.EMAIL.ADD_BUTTON'),
      title: t('SETTINGS.EMAIL.TITLE'),
      description: t('SETTINGS.EMAIL.DESCRIPTION'),
      host: t('SETTINGS.EMAIL.HOST'),
      url: t('SETTINGS.EMAIL.URL'),
    },
    'ftp-server': {
      action: t('SETTINGS.FTP.ADD_BUTTON'),
      title: t('SETTINGS.FTP.TITLE'),
      description: t('SETTINGS.FTP.DESCRIPTION'),
      host: t('SETTINGS.FTP.HOST'),
      url: t('SETTINGS.FTP.URL'),
    },
    'google-onedrive': {
      action: t('SETTINGS.ONE_DRIVE.ADD_BUTTON'),
      title: t('SETTINGS.ONE_DRIVE.TITLE'),
      description: t('SETTINGS.ONE_DRIVE.DESCRIPTION'),
      host: t('SETTINGS.ONE_DRIVE.HOST'),
      url: t('SETTINGS.ONE_DRIVE.URL'),
    },
    'webhook': {
      action: t('SETTINGS.WEBHOOK.ADD_BUTTON'),
      title: t('SETTINGS.WEBHOOK.TITLE'),
      description: t('SETTINGS.WEBHOOK.DESCRIPTION'),
      host: t('SETTINGS.WEBHOOK.HOST'),
      url: t('SETTINGS.WEBHOOK.URL'),
    },
  };

  return (
    <div className="w-full bg-white max-w-full overflow-y-auto">

      {/* Top Tabs */}
      <div className="flex items-center justify-between px-4 !bg-[#FAFAFA] border-b border-gray-200">
        <Tabs orientation="horizontal" value={currentTab} className="w-full p-0 border-none">
          <TabsList className="flex w-full justify-start gap-4 !border-none">
            {NavList.map((tab, index) => (
              <TabsTrigger
                key={`tab_${index}`}
                value={tab.key}
                onClick={() => setCurrentTab(tab.key)}
                className="!rounded-none text-md font-normal !bg-[#FAFAFA] px-3 py-2 rounded hover:text-blue-600 data-[state=active]:text-blue-600 !h-[4.04rem]"
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Content Body */}
      <NoDataFound
        error={error?.message}
        isLoading={isLoading}
        isNodata={!data || data.length === 0}
        title={t('SETTINGS.EMAIL.TITLE')}
      >
        <div className="px-6 pt-4">

          {/* Header & Button */}
          <div className="grid grid-cols-12 items-start mb-4 mt-4 gap-4">
            <div className="col-span-12 md:col-span-8">
              <SectionHeaderWithDescription
                title={common[currentTab].title}
                description={common[currentTab].description}
              />
            </div>

            <div className="col-span-12 md:col-span-4 flex justify-end">
              <Button
                variant="outline"
                size="default"
                className='text-md'
                onClick={() => setAddAndEdit(true)}
              >
                {!isLoading ? common[currentTab].action : <PleaseWaitLoadText />}
              </Button>
            </div>
          </div>

          {/* SMTP Info Box */}
          <div className="bg-[#F0F4FA] rounded-md px-4 py-3 text-md">
            <SectionHeaderWithDescription
              titleClassName='text-gray-500 pb-1'
              descriptionClassName='font-semibold text-black'
              title={common[currentTab].host}
              description={common[currentTab].url}
            />
          </div>
        </div>

        {/* Email Server Info Block */}
        <div className="px-6 py-6">
          <TabContent currentTab={currentTab} portalType={portalType} />
        </div>
      </NoDataFound>

      {addAndEdit && currentTab === 'email-server' && (
        <AddEmail
          onSubmit={() => {
            refetch();
            setAddAndEdit(false);
          }}
          open={addAndEdit}
          onClose={() => {
            setAddAndEdit(false);
          }}
        />
      )}
      {addAndEdit && currentTab === 'ftp-server' && (
        <FTPConfig
          onSubmit={() => {
            refetch();
            setAddAndEdit(false);
          }}
          open={addAndEdit}
          onClose={() => {
            setAddAndEdit(false);
          }}
        />
      )}
      {addAndEdit && currentTab === 'google-onedrive' && (
        <CloudStorageConfig
          onSubmit={() => {
            refetch();
            setAddAndEdit(false);
          }}
          open={addAndEdit}
          onClose={() => {
            setAddAndEdit(false);
          }}
        />
      )}
      {
        addAndEdit && currentTab === 'webhook' && (
          <WebhookConfig
            onSubmit={() => {
              refetch();
              setAddAndEdit(false);
            }}
            open={addAndEdit}
            onClose={() => {
              setAddAndEdit(false);
            }}
          />
        )
      }
    </div>
  );
});
