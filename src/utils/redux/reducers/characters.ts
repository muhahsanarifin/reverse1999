import { createSlice } from "@reduxjs/toolkit";
import {
  charactersThunks,
  charactersBySlugThunks,
} from "../actions/characters";

type charactersState = {
  [key: string]: any;
};

const initialState: charactersState = {
  get: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  getBySlug: {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    data: null,
    err: null,
  },
  paginate: {
    page: null,
    totalPages: null,
    totalItems: null,
    limit: 8,
  },
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    pagination: (prevState, action) => {
      return {
        ...prevState,
        paginate: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(charactersThunks.pending, (prevState) => {
      return {
        ...prevState,
        get: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(charactersThunks.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        get: {
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(charactersThunks.rejected, (prevState, action) => {
      return {
        ...prevState,
        get: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
    builder.addCase(charactersBySlugThunks.pending, (prevState) => {
      return {
        ...prevState,
        getBySlug: {
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
          data: null,
          err: null,
        },
      };
    });
    builder.addCase(charactersBySlugThunks.fulfilled, (prevState, action) => {
      return {
        ...prevState,
        getBySlug: {
          isFulfilled: true,
          isRejected: false,
          data: action.payload,
          err: null,
        },
      };
    });
    builder.addCase(charactersBySlugThunks.rejected, (prevState, action) => {
      return {
        ...prevState,
        getBySlug: {
          isLoading: false,
          isFulfilled: false,
          isRejected: true,
          data: { msg: action.error.message },
          err: action.error.message,
        },
      };
    });
  },
});

export const charactersAction = {
  ...charactersSlice.actions,
  charactersThunks,
  charactersBySlugThunks,
};

export default charactersSlice.reducer;
