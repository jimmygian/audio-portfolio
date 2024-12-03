import { getUserData } from "@/config/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "@/types";
import { Timestamp } from "firebase/firestore";


// TYPESCRIPT TYPES

export interface personalDataType {
  userData: UserDataType | null;
  isLoading: boolean;
  error: string | null;
}



// INITIAL STATES

const initialUserData: UserDataType = {
  userId: "",
  professions: [],
  admin: false,
  dob: "",
  name: {
      full: "",
      first: "",
      last: "",
      initials: "",
      alias: "",
  },
  info: {
    username: "",
    email: "",
    phone: "",
  }
}

const initialState: personalDataType = {
  userData: initialUserData,
  isLoading: false,
  error: null,
};


// USER DATA SLICE (contains all user info)

export const userDataSlice = createSlice({
  name: "userData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error on pending fetch
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.userData = action.payload as UserDataType;
        state.isLoading = false;
        state.error = null;
        // console.log(state.data)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});



// FETCH DATA ASYNC FUNCTION

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    let retrievedData = (await getUserData("users", "2yo8cXBza3MVkBdZDmNARLuDpOQ2"));

    const timestampString = retrievedData?.dob
    ? (retrievedData.dob instanceof Timestamp ? retrievedData.dob.toDate().toISOString() 
      : (retrievedData.dob instanceof Date) && retrievedData.dob)
    : null;
    

    retrievedData = retrievedData ? retrievedData : initialUserData;

    const finalData: UserDataType = {
      ...retrievedData,
      dob: timestampString
    } as UserDataType

    console.log("Retrieved data: ", finalData)
    return finalData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors appropriately, e.g., show an error message
  }
});

// Action creators are generated for each case reducer function
export default userDataSlice.reducer;
