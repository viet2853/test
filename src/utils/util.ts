import axios, { AxiosError } from "axios";
import { uploadFile } from "../api/uploadFlie.api";
import { User } from "../types/User.type";

export const setUserToLS = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLS = () =>
  JSON.parse(localStorage.getItem("user") as string) || "";

export const clearLS = () => {
  localStorage.clear();
};
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

export const handleUploadFile = async (files: File[]) => {
  const PRESET = "ecma_fpt_ass";
  const FOLDER = "ECMA_ASS";
  const urls = [];

  const formData = new FormData();
  formData.append("upload_preset", PRESET);
  formData.append("folder", FOLDER);

  for (const file of files) {
    formData.append("file", file);
    const res = await uploadFile(formData);
    urls.push(res.data.secure_url);
  }
  return urls;
};
