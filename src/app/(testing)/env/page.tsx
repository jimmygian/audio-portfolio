"use client";

import { fetchData } from "@/store/features/userData/userDataSlice";
import { useAppDispatch } from "@/store/reduxHooks";
import { UserDataType } from "@/types";
import React, { useState } from "react";



export default function Counter() {
  const [data, setData] = useState<UserDataType | null>(null);
  const dispatch = useAppDispatch();

  async function testFetchingButton() {
    try {
      const result = await dispatch(fetchData());

      if (fetchData.fulfilled.match(result)) {
        if (result.payload) {
          setData(result.payload);
        } else {
          console.error("No data received");
        }
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Helper function to render data, including nested objects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderData = (data: Record<string, any>) => {
    return Object.entries(data).map(([key, value]) => (
      <p key={key}>
        <strong>{key}:</strong>{" "}
        {typeof value === "object" && value !== null
          ? JSON.stringify(value, null, 2) // Stringify nested objects/arrays
          : value}
      </p>
    ));
  };

  function testENVButton() {
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
    console.log(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
    console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
    console.log(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID);
    console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
    console.log(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID);
    console.log("========");
    console.log(process.env.NEXT_PUBLIC_FIRESTORE_DG_USERID);
  }

  return (
    <div className="flex flex-col gap-11">
      <p>Test ENV Variables</p>
      <button onClick={testFetchingButton}>TEST FETCHING</button>
      <button onClick={testENVButton}>TEST ENV</button>

      {/* Display each key-value pair */}
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <div>{renderData(data)}</div>
        </div>
      )}
    </div>
  );
}
