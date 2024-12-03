import { Timestamp } from "firebase/firestore";

export interface UserDataType {
  userId?: string | null;
  professions?: string[] | null;  // professions could be null or undefined
  admin: boolean | null;  // admin could be null if it's explicitly set to null
  dob?: Timestamp | Date | string | null;  // dob can be null
  name?: {
    full?: string | null;  // full name can be a string or null
    first?: string | null;
    last?: string | null;
    initials?: string | null;
    alias?: string | null;
  };
  info: {
    username?: string | null;  // username can be string or null
    email?: string | null;
    phone?: string | null;
  };
}