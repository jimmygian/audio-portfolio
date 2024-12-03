import { z } from 'zod';
import { Timestamp } from 'firebase/firestore';


export const UserDataSchema = z.object({
  userId: z.string().optional().nullable(),
  professions: z.array(z.string()).optional().nullable(),
  admin: z.boolean().nullable(),
  dob: z.union([z.string(), z.instanceof(Timestamp), z.null()]).optional(),
  name: z
    .object({
      full: z.string().optional().nullable(),
      first: z.string().optional().nullable(),
      last: z.string().optional().nullable(),
      initials: z.string().optional().nullable(),
      alias: z.string().optional().nullable(),
    })
    .optional(),
  info: z.object({
    username: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
  }),
});