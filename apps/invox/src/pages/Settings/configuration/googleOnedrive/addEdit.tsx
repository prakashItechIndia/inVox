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

const cloudStorageSchema = z.object({
  integrationName: z.string().min(1, 'Integration name is required'),
  provider: z.enum(['Google Drive', 'OneDrive']),
  folderPath: z.string().min(1, 'Folder path is required'),
  syncFrequency: z.enum(['Realtime', 'Daily', 'Weekly']),
  accessToken: z.string().min(1, 'Access token is required'),
});

type CloudStorageFormValues = z.infer<typeof cloudStorageSchema>;

export const CloudStorageConfig = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CloudStorageFormValues) => void;
}) => {
  const form = useForm<CloudStorageFormValues>({
    resolver: zodResolver(cloudStorageSchema),
    defaultValues: {
      integrationName: '',
      provider: 'Google Drive',
      folderPath: '',
      syncFrequency: 'Daily',
      accessToken: '',
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-full max-w-4xl rounded-3xl p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Configure Cloud Storage</h2>

          <Form {...form}>
            <form
              id="cloudStorageForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-3 gap-4"
            >
              <FormField
                control={form.control}
                name="integrationName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Integration Name *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g. Marketing Drive Sync" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="provider"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Service Provider *</FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        placeHolder="Select"
                        options={[
                          { label: 'Google Drive', value: 'Google Drive' },
                          { label: 'OneDrive', value: 'OneDrive' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="folderPath"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Folder Path *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="/Marketing/Reports" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="syncFrequency"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Sync Frequency *</FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        placeHolder="Select"
                        options={[
                          { label: 'Realtime', value: 'Realtime' },
                          { label: 'Daily', value: 'Daily' },
                          { label: 'Weekly', value: 'Weekly' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accessToken"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Access Token *</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="OAuth token" />
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
            form="cloudStorageForm"
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
