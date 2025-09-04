import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@shared/components/ui/dialog';
import { Button } from '@shared/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@shared/components/ui/form';
import { Input } from '@shared/components/ui/input';
import { CustomSelect } from '@/components/custom-select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const webhookSchema = z.object({
  webhookName: z.string().min(1, 'Webhook name is required'),
  eventTrigger: z.enum(['On Upload', 'On Error', 'On Sync']),
  targetUrl: z.string().url('Enter a valid URL'),
  method: z.enum(['POST', 'GET']),
  authToken: z.string().optional(),
});

type WebhookFormValues = z.infer<typeof webhookSchema>;

export const WebhookConfig = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: WebhookFormValues) => void;
}) => {
  const form = useForm<WebhookFormValues>({
    resolver: zodResolver(webhookSchema),
    defaultValues: {
      webhookName: '',
      eventTrigger: 'On Upload',
      targetUrl: '',
      method: 'POST',
      authToken: '',
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-full max-w-4xl rounded-3xl p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Configure Webhook</h2>

          <Form {...form}>
            <form
              id="webhookConfigForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-3 gap-4"
            >
              <FormField
                control={form.control}
                name="webhookName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Webhook Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Order Notification" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventTrigger"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Event Trigger</FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        placeHolder="Select"
                        options={[
                          { label: 'On Upload', value: 'On Upload' },
                          { label: 'On Error', value: 'On Error' },
                          { label: 'On Sync', value: 'On Sync' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetUrl"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Target URL</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="https://yourdomain.com/webhook" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Method</FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        placeHolder="Select"
                        options={[
                          { label: 'POST', value: 'POST' },
                          { label: 'GET', value: 'GET' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="authToken"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Auth Token (optional)</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="Bearer token" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <DialogFooter className="pt-6">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            form="webhookConfigForm"
            type="submit"
            className="ml-2 bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
