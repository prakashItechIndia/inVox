import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { NavigationRoutes } from '@/common/constant';
import { useSetPassword } from '@/hooks/rq/mutations/useSetPassword';
import { Button } from '@shared/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shared/components/ui/form';
import { PasswordInput } from '@shared/components/ui/password-input';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { z_password, z_retype_password } from '@/lib/zod.validator';
import { styles } from '@/styles/style';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { PasswordValidationCheckbox } from './passwordValidationCheckbox';
import { Wrapper } from './Wrapper';

const FormSchema = z
  .object({
    password: z_password,
    confirmPassword: z_retype_password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const SetPassword = observer(function() {
  const { mutate, isPending, error, isError } = useSetPassword();
  const navigate = useNavigate();

  const { t } = useLanguageTranslation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('tk') || '';
  const userId = searchParams.get('id') || '';

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(
      { ...data, token, userId },
      {
        onSuccess: () => {
          toast.success(t('SET_PASSWORD.TOAST.SUCCESS'));
          navigate(NavigationRoutes.SignIn);
        },
      },
    );
  }

  useEffect(() => {
    if (isError && error) {
      toast.error(t('COMMON.TOAST.ERROR_PREFIX') + ': ' + error?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError]);

  if (!token) {
    return <Navigate to={NavigationRoutes.SignIn} />;
  }

  function handlePasswordBlur() {
    form.trigger('confirmPassword');
  }

  const submitButtonDisabled = isPending;
  // OR
  // const submitButtonDisabled =
  //   !form.formState.isDirty || !form.formState.isValid || isPending;

  return (
    <Wrapper
      title={t('LOGIN.TITLE')}
      subtitle={t('LOGIN.SUB_TITLE')}
      bannerTitle={t('SET_PASSWORD.TITLE')}
      bannerDescription={t('SET_PASSWORD.DESCRIPTION')}
      hiddenReset={true}
      loginFormclassName='!pt-2'
      footerContent={
        <>
          <Button
            className={styles.submitButton}
            type="submit"
            form="form"
            disabled={submitButtonDisabled}>
            {!isPending ? t('SET_PASSWORD.SUBMIT') : <PleaseWaitLoadText />}
          </Button>
          <Button
            variant="link"
            className={'p-0'}
            onClick={() => navigate(NavigationRoutes.SignIn)}>
            {t('SET_PASSWORD.BACK_TO_LOGIN')}
          </Button>
        </>
      }>
      <Form {...form}>
        <form
          id="form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('SET_PASSWORD.NEW_PASSWORD')}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t('SET_PASSWORD.NEW_PASSWORD')}
                    autoFocus
                    {...field}
                    onBlur={() => {
                      field.onBlur();
                      handlePasswordBlur();
                    }}
                    onChange={(e) => {
                      field.onChange(e);
                      if (form.formState.touchedFields.confirmPassword) {
                        handlePasswordBlur();
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('SET_PASSWORD.CONFIRM_PASSWORD')}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t('SET_PASSWORD.CONFIRM_PASSWORD')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <PasswordValidationCheckbox password={form.watch('password')} />
    </Wrapper>
  );
});
