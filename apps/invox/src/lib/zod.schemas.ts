import { simple_phone } from '@shared/lib/zod.validator';
import { z } from 'zod';

import {
  z_email,
  z_file_upload,
  z_first_name,
  z_last_name,
  z_optional_boolean,
  z_phone,
  z_read_only,
  z_user_type,
} from '@/lib/zod.validator';

export const ProfileSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(1, { message: 'First name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'Last name is required' })
    .trim(),
  phone: simple_phone,
});

export const CreateTherapistSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(1, { message: 'First name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'Last name is required' })
    .trim(),
  phone: simple_phone,
  email: z_email,
  facilityId: z.string().min(1),
});

export const CreateAdminSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(1, { message: 'First name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'Last name is required' })
    .trim(),
  phone: simple_phone,
  email: z_email,
});

export const ProfileFormSchema = z.object({
  firstName: z_first_name,
  lastName: z_last_name,
  email: z_email,
  phoneNumber: z_phone,
  delinquentAlert: z_optional_boolean,
  escrowAlert: z_optional_boolean,
  file: z_file_upload,
  removedPictureId: z.string().optional(),
});

export const UsersFormSchema = ProfileFormSchema.extend({
  roleId: z_user_type,
  isReadOnly: z_read_only,
});