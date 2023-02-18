import axios from "axios";

const CLOUD_NAME = "dopsykyvn";

export const uploadFile = (formData: FormData) =>
  axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
