import { NavigationRoutes } from '@/common/constant';
import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { useLogin } from '@/hooks/rq/mutations/useLogin';
import { cn } from '@/lib/utils';
import { z_email, z_password_login } from '@/lib/zod.validator';
import { styles } from '@/styles/style';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { PasswordInput } from '@shared/components/ui/password-input';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InvoxUserType } from 'shared';
import { toast } from 'sonner';
import { z } from 'zod';
import { Wrapper } from './Wrapper';

const FormSchema = z.object({
  userName: z_email,
  password: z_password_login,
});

export const Login = observer(function() {
  const { mutate, isPending, error, isError } = useLogin();
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    localStorage.setItem('users', 'loggedIn');
    if (data?.userName?.includes('admin')) {
      localStorage.setItem('currentRole', InvoxUserType.organisationAdmin);
    } else if (data?.userName?.includes('clarifier')) {
      localStorage.setItem('currentRole', InvoxUserType.clarifier);
    } else if (data?.userName?.includes('indexer')) {
      localStorage.setItem('currentRole', InvoxUserType.indexer);
    } else if (data?.userName?.includes('verifier')) {
      localStorage.setItem('currentRole', InvoxUserType.verifier);
    }

    toast.success(t('LOGIN.TOAST.SUCCESS'));

    setTimeout(() => {
      window.location.href = NavigationRoutes.Dashboard;
    }, 1000);

    // mutate(data, {
    //   onSuccess: () => {
    //     toast.success(t('LOGIN.TOAST.SUCCESS'));
    //     navigate(NavigationRoutes.Dashboard);
    //   },
    // });
  }

  useEffect(() => {
    if (isError && error) {
      toast.error(t('COMMON.TOAST.ERROR_PREFIX') + ': ' + error?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError]);

  const handleForgotPassword = () => {
    navigate(NavigationRoutes.ForgotPassword);
  };

  const submitButtonDisabled = isPending;


  return (
    <Wrapper
      title={t('LOGIN.TITLE')}
      subtitle={t('LOGIN.SUB_TITLE')}
      bannerTitle={t('LOGIN.BANNER_TITLE')}
      bannerDescription={t('LOGIN.BANNER_DESCRIPTION')}
      footerContent={
        <Button
          className={cn(styles.submitButton, 'mb-4')}
          type="submit"
          form="form"
          disabled={submitButtonDisabled}
        >
          {!isPending
            ? t('LOGIN.LOGIN')
            : <PleaseWaitLoadText />
          }
        </Button>
      }
    >
      <Form {...form}>
        <form
          id="form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t('LOGIN.USERNAME')}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('LOGIN.USERNAME')}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('LOGIN.PASSWORD')}</FormLabel>
                <FormControl>
                  <PasswordInput placeholder={t('LOGIN.PASSWORD')} {...field} />
                </FormControl>
                <FormMessage />
                <div className="relative h-0 w-full">
                  <Button
                    className="text-link absolute -bottom-8 -right-3 text-xs font-normal"
                    type="button"
                    variant={'link'}
                    tabIndex={-1}
                    onClick={() => handleForgotPassword()}
                  >
                    {t('LOGIN.FORGOT_PASSWORD')}?
                  </Button>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Wrapper >
  );
});
