import axios from "axios";

const { VITE_baseURL } = import.meta.env;

type query = number | string;

export const characters = (query: query = "") =>
  axios.get(VITE_baseURL + "/api/v1" + "/characters" + query);

type slug = string;

export const charactersBySlug = (slug: slug) =>
  axios.get(VITE_baseURL + "/api/v1" + "/characters" + `/${slug}`);
