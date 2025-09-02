import { CustomSelect } from '@/components/custom-select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/components/ui/button';
import {
  Dialog,
  DialogContent
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const customEmailSchema = z.object({
  emailId: z.string().min(1, 'Email ID is required'),
  name: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
});

type CustomEmailFormValues = z.infer<typeof customEmailSchema>;

export const AddEmail = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CustomEmailFormValues) => void;
}) => {
  const form = useForm<CustomEmailFormValues>({
    resolver: zodResolver(customEmailSchema),
    defaultValues: {
      emailId: '',
      name: '',
      location: '',
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-full max-w-3xl rounded-3xl p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Configure New Email</h2>

          <Form {...form}>
            <form
              id="configureEmailForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              {/* Email ID with @invox.com */}
              <FormField
                control={form.control}
                name="emailId"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Email ID *</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input {...field} placeholder="John Doe" className="w-full" />
                        <span className="ml-2 text-gray-600">@invox.com</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="ie: john doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location Dropdown */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Location *</FormLabel>
                    <FormControl>
                      <CustomSelect
                        onValueChange={field.onChange}
                        value={field.value}
                        placeHolder="Select"
                        options={[
                          { value: 'us', label: 'United States' },
                          { value: 'uk', label: 'United Kingdom' },
                          { value: 'in', label: 'India' },
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>


        </div>

        {/* Footer Buttons */}
        <div className="pt-2 flex justify-between items-center w-full">
          <div>
            {/* Credits Info */}
            <div className="text-sm text-gray-700">
              Subscribe to Custom E-mail for <span className="text-green-600 font-semibold">100 Credits</span>
            </div>

            {/* Credits & Upgrade */}
            <span className="text-gray-800 font-semibold text-sm">Available Credits </span>
            <span className="text-indigo-600 text-sm">4500
              <Button variant="outline" className='p-1 ml-2 text-[10px]' size="empty">Upgrade</Button>
            </span>
          </div>
          <div>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button
              form="configureEmailForm"
              type="submit"
              className="ml-2 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
