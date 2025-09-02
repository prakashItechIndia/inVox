import { CustomSelect } from '@/components/custom-select';
import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { useUsersAdd, useUsersEdit } from '@/hooks/rq/mutations/useUsers';
import { useGetRoles } from '@/hooks/rq/queries/useGetRoles';
import { UsersFormSchema } from '@/lib/zod.schemas';
import { styles } from '@/styles/style';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, useMask } from '@react-input/mask';
import { Button } from '@shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter
} from '@shared/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shared/components/ui/form';
import { Input } from '@shared/components/ui/input';
import { Separator } from '@shared/components/ui/separator';
import { Switch } from "@shared/components/ui/switch"; // Adjust the import path as necessary
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  cn,
  GetUserResponse,
  InvoxUserType,
  RoleType,
  RoleTypeName
} from 'shared';
import { toast } from 'sonner';
import { z } from 'zod';
import { UserProfileCard } from './profileCard';

const options = {
  mask: '(___) ___-____',
  replacement: { _: /\d/ },
};
type Props = {
  onSuccess: () => void;
  open: boolean;
  onClose?: () => void;
  isEdit?: boolean;
  portalType: InvoxUserType;
  editUser?: GetUserResponse;
};

export const AddUsers = (props: Props) => {
  const { open, isEdit, portalType, onSuccess, editUser, onClose } = props;
  const { t } = useLanguageTranslation();
  const { data: roles, isLoading: isRolesLoading } = useGetRoles();
  const {
    mutate: addMutate,
    isPending,
    isError: isAddError,
    error: isAddErrorResponse,
  } = useUsersAdd();
  const {
    mutate: updateMutate,
    isPending: isEditPending,
    isError: isEditError,
    error: isEditErrorResponse,
  } = useUsersEdit(editUser?.id || ''); // Pass userId for editing
  const submitButtonDisabled = isPending || isEditPending; // Replace with actual loading state

  const form = useForm<z.infer<typeof UsersFormSchema>>({
    resolver: zodResolver(UsersFormSchema),
    mode: 'onTouched',
    defaultValues: {
      firstName: editUser?.firstName || '',
      lastName: editUser?.lastName || '', // Added lastName to defaultValues
      email: editUser?.email || '', // Added email to defaultValues
      phoneNumber: editUser?.phoneNumber ? `${editUser?.phoneNumber}` : '', // Added phoneNumber to defaultValues
    },
  });
  const onSubmit = async (data: z.infer<typeof UsersFormSchema>) => {
    const bodyData = {
      ...data,
      phoneNumber: data.phoneNumber
        ? Number(data.phoneNumber.replace(/\D/g, ''))
        : null,
      countryCode: data.phoneNumber ? '+1' : null,
      userType: portalType,
      status: editUser?.status ?? true,
      removedPictureId: '',
    };
    if (isEdit) {
      updateMutate(bodyData, {
        onSuccess: () => {
          toast.success(t('USERS.TOAST.UPDATE_SUCCESS'));
          onSuccess?.();
        },
      });
    } else {
      addMutate(bodyData, {
        onSuccess: () => {
          toast.success(t('USERS.TOAST.ADD_SUCCESS'));
          onSuccess?.();
        },
      });
    }
  };

  React.useEffect(() => {
    if (isAddError && isAddErrorResponse) {
      toast.error(
        t('COMMON.TOAST.ERROR_PREFIX') + ': ' + isAddErrorResponse?.message,
      );
    }
    if (isEditError && isEditErrorResponse) {
      toast.error(
        t('COMMON.TOAST.ERROR_PREFIX') + ': ' + isEditErrorResponse?.message,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddError, isAddErrorResponse, isEditError, isEditErrorResponse]);

  const inputRef = useMask(options);
  const [isActive, setIsActive] = React.useState(editUser?.status ?? true);

  return (
    <Dialog open={submitButtonDisabled ? submitButtonDisabled : open}>
      <DialogContent
        className="bg-white w-full max-w-lg lg:min-w-[34vw] rounded-3xl p-0 overflow-hidden"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Header */}
        <UserProfileCard
          isEdit={isEdit}
          editUser={editUser}
          form={form}
          submitButtonDisabled={submitButtonDisabled}
          onClose={onClose}
        />

        {/* Form Section */}
        <Separator className='my-4' />
        <div className="px-8 py-0">
          <Form {...form}>
            <form
              id="form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={!isEdit ? "ie: John" : undefined}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={!isEdit ? "ie: Doe" : undefined}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={!isEdit ? "ie; johndoe@mail.com" : undefined}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          icon={
                            <span className="text-grayLightWhite absolute left-3 top-[3px] flex items-center justify-center py-2 font-bold">
                              +1
                            </span>
                          }
                          placeholder={t('USERS.ADD_USER.PHONE_NUMBER')}
                          defaultValue={format(field.value || '', options)} // Sets the default value
                          onChange={(e) => {
                            const value = e.currentTarget.value.replace(
                              /\D/g,
                              '',
                            );
                            if (value.length > 10) {
                              e.preventDefault();
                            }
                            field.onChange(value);
                          }}
                          ref={inputRef} // Applies the mask to the input
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="roleId"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Role *</FormLabel>
                      <FormControl>
                        <CustomSelect
                          onValueChange={field.onChange}
                          value={field.value}
                          options={
                            roles &&
                            roles.map((e) => ({
                              value: String(e.id),
                              label: RoleTypeName[e.name as RoleType],
                            }))
                          }
                          isLoading={isRolesLoading}
                          placeHolder="Select"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Active Switch */}
                <div className="flex items-center space-x-3 col-span-1 mt-7">
                  <Switch
                    checked={isActive}
                    onCheckedChange={(checked) => {
                      setIsActive(checked);
                    }}
                  />
                  <span className="font-medium text-gray-900">Active</span>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <Separator className='mt-4' />
        {/* Footer */}
        <DialogFooter className="flex items-center justify-end p-4 pt-0">
          <Button
            className={cn(styles.CancelButton)}
            type="button"
            onClick={onClose}
          >
            {t('USERS.ADD_USER.CANCEL')}
          </Button>
          <Button
            className={cn(styles.SubmitButton)}
            type="submit"
            tabIndex={-1}
            form="form"
            disabled={false}>
            {submitButtonDisabled ? (
              <PleaseWaitLoadText />
            ) : isEdit ? (
              t('USERS.ADD_USER.EDIT_SUBMIT')
            ) : (
              t('USERS.ADD_USER.SUBMIT')
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
