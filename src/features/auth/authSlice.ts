import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authUser, LoginUser } from "./type";
import axios from "axios";
import { addAppListener } from "../../app/listenerMiddleware";
import {RootState} from '../../app/store'
interface UsersState {
  entities: LoginUser[];
  currentRequestId: string;
  error: null;
  isLoggedIn: boolean;
  loading: "pending" | "succeeded" | "failed";
}

const initialState: UsersState = {
  entities: [],
  isLoggedIn: false,
  currentRequestId: "",
  error: null,
  loading: "pending",
}

export const registration = createAsyncThunk(
  "auth/registration",
  async (userData: object, thunkAPI) => {
    try {
      const { data } = await axios.post<authUser[]>(
        "http://localhost:5000/api/registration",
        userData
      );
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: object, thunkAPI) => {
    try {
      const response = await axios.post<LoginUser[]>(
        "http://localhost:5000/api/login",
         userData
      )
      if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "auth/fetchByIdStatus",
  async (userId: any, thunkAPI) => {
    const stateApp = thunkAPI.getState() as RootState;
    const user = stateApp.auth
    const {currentRequestId, loading} = user;
    if(loading !== 'pending' && currentRequestId !== null) {
       return
    }
    const response = await axios.get(`http://localhost:5000/api/user/${userId}`)
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
   try {
    await axios.post("http://localhost:5000/api/logout").then(() => {
       localStorage.removeItem("user")
       return undefined
     });
   } catch (error) {
    return thunkAPI.rejectWithValue(error);
   }
  
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.loading = "pending";
      state.entities = [];
    });
    builder.addCase(
      registration.fulfilled,
      (state, action: PayloadAction<authUser[]>) => {
        state.loading = "succeeded";
        state.isLoggedIn = false;
        state.entities = [];
      }
    );
    builder.addCase(registration.rejected, (state) => {
      state.loading = "failed";
      state.isLoggedIn = false;
      state.entities = [];
    });
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
      state.entities = [];
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginUser[]>) => {
        state.loading = "succeeded";
        state.entities = action.payload;
        state.isLoggedIn = true;
      }
    );
    builder.addCase(login.rejected, (state) => {
      state.loading = "failed";
      state.isLoggedIn = false;
      state.entities = [];
    });
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = "pending";
      state.currentRequestId = action.meta.requestId;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action: any) => {
      const { requestId } = action.meta;
      if (state.currentRequestId === requestId) {
        state.loading = "succeeded";
        state.isLoggedIn = true;
        state.entities = action.payload;
      }
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.loading = "failed";
      state.isLoggedIn = false;
      state.currentRequestId = "";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.entities = []
    })
  },
});

export default authSlice.reducer;
