import { z } from 'zod';

import { CreateTherapistSchema, ProfileSchema } from './zod.schemas';

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;
export type CreateTherapistSchemaType = z.infer<typeof CreateTherapistSchema>;
