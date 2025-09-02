import { MyProfileImage } from '@/components/myProfileImage';
import { GetUserResponse } from '@shared/_api/api';
import { ReactCloseIcon, ReactUserMenuIcon } from '@shared/components/icons/nav-bar';
import { Button } from '@shared/components/ui/button';
import { Input } from '@shared/components/ui/input';
import { Separator } from '@shared/components/ui/separator';
import { Edit2 } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface Props {
  isEdit?: boolean;
  editUser?: GetUserResponse | null;
  form: any;
  submitButtonDisabled: boolean;
  onClose?: () => void;
}

export const UserProfileCard = (props: Props) => {
  const { isEdit, editUser, form, submitButtonDisabled, onClose } = props;
  const fileRef: React.RefObject<HTMLInputElement> = useRef(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
    form?.trigger('file');
  };

  const renderHeader = () => (
    <div className="flex justify-between items-start w-full">
      <div className="flex items-center w-full">
        <Button variant="outline" className="rounded-full w-16 h-16">
          <ReactUserMenuIcon className="h-4 w-4" color="#000000" />
        </Button>
        <div className="ml-4">
          <div className="text-lg font-semibold text-gray-900">Add New User</div>
          <div className="text-gray-500 text-xs">Enter user details to create a new account.</div>
        </div>
      </div>
      <Button
        variant="ghost"
        className="text-gray-400 hover:bg-transparent hover:text-gray-600"
        onClick={() => {
          if (!submitButtonDisabled) onClose?.();
        }}
      >
        <ReactCloseIcon className="h-4 w-4" />
      </Button>
    </div>
  );

  const renderImageSection = () => (
    <div className="flex flex-col items-center w-full mt-6">
      <div className="relative group w-32 h-32">
        <Button
          variant="outline"
          className="rounded-full w-full h-full bg-gray-100 border-none flex items-center justify-center relative overflow-hidden"
        >
          <ReactUserMenuIcon className="h-16 w-16 text-[#dedede] transition-opacity duration-200 group-hover:opacity-0" color='#dedede' />
          <div className="absolute inset-0 flex items-center justify-center rounded-full backdrop-blur-sm bg-gray-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Edit2 className="h-8 w-8 text-white" />
          </div>
        </Button>
      </div>
    </div>
  );

  const renderEditHeader = () => (
    <div className="flex items-center justify-between w-full">
      <MyProfileImage
        className="h-32 w-32 -mb-10 border-4 border-white"
        textClassName="text-sm"
        fileId={editUser?.profilePicture?.id}
        imageUrl={
          file
            ? URL.createObjectURL(file)
            : form.watch('removedPictureId')
              ? ''
              : editUser?.profilePicture?.url
        }
        isProfileUpdate
      />
      <Input
        ref={fileRef}
        className="hidden"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleImageChange}
      />
      <Button variant="outline" onClick={() => fileRef.current?.click()}>
        Change Image
      </Button>
    </div>
  );

  return (
    <div className="rounded-t-2xl p-6 pb-0 bg-white">
      {!isEdit ? (
        <>
          {renderHeader()}
          <Separator className='my-4' />
          {renderImageSection()}
        </>
      ) : (
        <>
          <div className="bg-gray-100">{renderEditHeader()}</div>
          <div className="text-left px-8 mt-8">
            <div className="text-xl font-semibold text-gray-900">
              {editUser?.firstName} {editUser?.lastName}
            </div>
            <div className="text-gray-500 text-sm">Role</div>
          </div>
        </>
      )}
    </div>
  );
};
