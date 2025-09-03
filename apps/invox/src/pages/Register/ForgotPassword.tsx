import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shared/components/ui/form';
import { Input } from '@shared/components/ui/input';
import { toast } from 'sonner';

import { observer } from 'mobx-react-lite';
import { useForgot } from '@/hooks/rq/mutations/useForgot';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavigationRoutes } from '@/common/constant';
import { z_email } from '@/lib/zod.validator';
import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { Wrapper } from './Wrapper';
import { styles } from '@/styles/style';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';

const FormSchema = z.object({
  email: z_email,
});

export const ForgotPassword = observer(function() {
  const { mutate, isPending, error, isError } = useForgot();
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data, {
      onSuccess: () => {
        toast.success(t('FORGOT_PASSWORD.TOAST.SUCCESS'));
        navigate(NavigationRoutes.SignIn);
      },
    });
  }

  useEffect(() => {
    if (isError && error) {
      toast.error(t('COMMON.TOAST.ERROR_PREFIX') + ': ' + error?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError]);

  const submitButtonDisabled = isPending;

  return (
    <Wrapper
      title={t('LOGIN.TITLE')}
      subtitle={t('LOGIN.SUB_TITLE')}
      bannerTitle={t('FORGOT_PASSWORD.TITLE')}
      bannerDescription={t('FORGOT_PASSWORD.DESCRIPTION')}
      hiddenReset={true}
      footerContent={
        <>
          <Button
            className={styles.submitButton}
            type="submit"
            form="form"
            disabled={submitButtonDisabled}>
            {!isPending ? t('FORGOT_PASSWORD.SUBMIT') : <PleaseWaitLoadText />}
          </Button>
          <Button
            variant="link"
            className="text-link p-0 text-md font-normal"
            onClick={() => navigate(NavigationRoutes.SignIn)}>
            {t('FORGOT_PASSWORD.BACK_TO_LOGIN')}
          </Button>
        </>
      }
    >
      <Form {...form}>
        <form
          id="form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{t('FORGOT_PASSWORD.EMAIL')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('FORGOT_PASSWORD.EMAIL')}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Wrapper>
  );
});
