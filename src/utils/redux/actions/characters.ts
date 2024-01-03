import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../../lib/api/characters";

type CharactersActionProps = {
  cbPending?: () => void;
  cbFulfilled?: () => void;
  cbFinally?: () => void;
  query?: string | number;
};

export const charactersThunks = createAsyncThunk(
  "characters/get",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    query,
  }: CharactersActionProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.characters(query);
      typeof cbFulfilled === "function" && cbFulfilled();
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);

type charactersBySlugProps = {
  cbPending?: () => void;
  cbFulfilled?: () => void;
  cbFinally?: () => void;
  slug?: string;
};

export const charactersBySlugThunks = createAsyncThunk(
  "charactersBySlug/get",
  async ({
    cbPending,
    cbFulfilled,
    cbFinally,
    slug,
  }: charactersBySlugProps) => {
    try {
      typeof cbPending === "function" && cbPending();
      const response = await api.charactersBySlug(slug);
      typeof cbFulfilled === "function" && cbFulfilled();
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw JSON.stringify(error.response.data);
      } else {
        throw error;
      }
    } finally {
      typeof cbFinally === "function" && cbFinally();
    }
  }
);
