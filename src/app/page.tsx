"use client";

import { useAppDispatch } from "@/store/reduxHooks";
import { fetchData } from "@/store/features/userData/userDataSlice";
import { useState } from "react";
import { UserDataType } from "@/types"; // Assuming UserDataType is defined in your types

export default function Home() {
  const [data, setData] = useState<UserDataType | null>(null);
  const dispatch = useAppDispatch();

  async function handleButtonClick() {
    try {
      const result = await dispatch(fetchData());

      // Check if the result is fulfilled and has a valid payload
      if (fetchData.fulfilled.match(result)) {
        if (result.payload) {
          setData(result.payload); // Only set if the payload is not undefined
        } else {
          console.error("No data received"); // Handle undefined case if needed
        }
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  data && console.log(data);

  return (
    <>
      <div>FIRST PAGE</div>
      <div style={{ height: "500px" }}></div>
      <button onClick={handleButtonClick}>CLICK</button>
    </>
  );
}
