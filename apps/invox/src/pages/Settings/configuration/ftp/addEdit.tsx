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

const ftpSchema = z.object({
  ftpName: z.string().min(1, 'FTP Name is required'),
  ftpServer: z.string().min(1, 'FTP Server is required'),
  location: z.string().min(1, 'Location is required'),
  ftpPath: z.string().min(1, 'FTP Path is required'),
  userName: z.string().min(1, 'User Name is required'),
  password: z.string().min(1, 'Password is required'),
  ftpPort: z.string().min(1, 'FTP Port is required'),
});

type FTPFormValues = z.infer<typeof ftpSchema>;

export const FTPConfig = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: FTPFormValues) => void;
}) => {
  const form = useForm<FTPFormValues>({
    resolver: zodResolver(ftpSchema),
    defaultValues: {
      ftpName: '',
      ftpServer: '',
      location: '',
      ftpPath: '',
      userName: '',
      password: '',
      ftpPort: '',
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-full max-w-4xl rounded-3xl p-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Configure New FTP Server</h2>

          <Form {...form}>
            <form
              id="ftpConfigForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-3 gap-4"
            >
              {/* FTP Name */}
              <FormField
                control={form.control}
                name="ftpName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>FTP Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FTP Server */}
              <FormField
                control={form.control}
                name="ftpServer"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>FTP Server</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Location</FormLabel>
                    <FormControl>
                      <CustomSelect
                        onValueChange={field.onChange}
                        value={field.value}
                        placeHolder="Select"
                        options={[
                          { value: 'Germany', label: 'Germany' },
                          { value: 'USA', label: 'USA' },
                          { value: 'India', label: 'India' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FTP Path */}
              <FormField
                control={form.control}
                name="ftpPath"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>FTP Path</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Server URL" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* User Name */}
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>User Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="ie: Marcus Aminoff" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FTP Port */}
              <FormField
                control={form.control}
                name="ftpPort"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel required>FTP Port</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="990" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        {/* Footer */}
        <DialogFooter className="pt-6">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            form="ftpConfigForm"
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
