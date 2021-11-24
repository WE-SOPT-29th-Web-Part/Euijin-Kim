import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const imageClient = axios.create({
  baseURL: "http://localhost:3000/api/image",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
