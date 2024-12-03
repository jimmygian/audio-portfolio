/* eslint-disable */

import {
  getDocs,
  getDoc,
  collection,
  setDoc,
  addDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

/* eslint-enable */


import { db } from "./firebase";
import { UserDataType } from "@/types";
// import { UserDataSchema } from "@/validation";

export const getUserData = async (
  collectionName: string,
  userId: string
): Promise<UserDataType | null> => {
  const userDocRef = doc(db, collectionName, userId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    const rawData = {
      userId,
      admin: false, // Default value for admin (or set to null if needed)
      info: {}, // Default empty object or other appropriate default value
      ...userDocSnapshot.data(),
    };

    try {
      return rawData;
    } catch (error) {
      console.error("Invalid user data format", error);
      return null;
    }
  } else {
    console.log("User document not found.");
    return null;
  }
};