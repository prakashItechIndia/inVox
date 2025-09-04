import { ChatInput } from "@/components/chatInput";
import { CustomSelect } from "@/components/custom-select";
import { UserProfileHeader } from "@/components/userProfileHeader";
import { UsersFormSchema } from "@/lib/zod.schemas";
import { styles } from "@/styles/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@shared/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/components/ui/form";
import { Separator } from "@shared/components/ui/separator";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";
import { useForm } from "react-hook-form";
import { cn } from "shared";
import { toast } from "sonner";
import { z } from "zod";

type Props = {
  onSuccess: () => void;
  open: boolean;
  onClose?: () => void;
  title: string;
  description: string;
  saveText: string;
  icon: any;
  selectQueryTitle?: string;
};

export const ClarifyPoppover = (props: Props) => {
  const {
    open,
    onSuccess,
    onClose,
    description,
    title,
    saveText,
    icon,
    selectQueryTitle,
  } = props;
  const { t } = useLanguageTranslation();

  const form = useForm<z.infer<typeof UsersFormSchema>>({
    resolver: zodResolver(UsersFormSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "", // Added lastName to defaultValues
      email: "", // Added email to defaultValues
      phoneNumber: "", // Added phoneNumber to defaultValues
    },
  });
  const onSubmit = async () => {
    toast.success(t("CLARIFIER.TOAST.ADD_SUCCESS"));
    onSuccess?.();
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="bg-white w-full max-w-lg lg:min-w-[34vw] rounded-3xl p-0 overflow-hidden"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Header */}
        <UserProfileHeader
          submitButtonDisabled={false}
          onClose={onClose}
          title={title}
          description={description}
          icon={icon}
        />

        {/* Form Section */}
        <Separator />
        <div className="px-8 py-0">
          <Form {...form}>
            <form
              id="form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="roleId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{selectQueryTitle}</FormLabel>
                    <FormControl>
                      <CustomSelect
                        onValueChange={field.onChange}
                        value={field.value}
                        options={[{ label: "1", value: "1" }]}
                        isLoading={false}
                        placeHolder="Select"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="mt-4">{t("CLARIFIER.CLARIFICATION_ADD.NOTES")}</div>
          <ChatInput className="m-0 mt-4" />
        </div>
        <Separator className="mt-4" />
        {/* Footer */}
        <DialogFooter className="flex items-center justify-end p-4 pt-0">
          <Button type="button" variant={"outline"} onClick={onClose}>
            {t("USERS.ADD_USER.CANCEL")}
          </Button>
          <Button
            className={cn(styles.SubmitButton)}
            type="submit"
            tabIndex={-1}
            form="form"
            disabled={false}
          >
            {/* {open ? <PleaseWaitLoadText /> : t("CLARIFIER.CLARIFICATION_ADD.CLARIFICATION_SAVE")} */}
            {saveText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
