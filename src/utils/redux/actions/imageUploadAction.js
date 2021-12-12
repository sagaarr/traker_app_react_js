import axios from "axios";
import { uploadImg } from "../../constants/APIConstants";
import { API_BASE_URL } from "../../constants/base_url";
import { IMG_UPLOAD_FAIL, IMG_UPLOAD_REQ, IMG_UPLOAD_SUCCESS } from "./types";
import { toast } from "react-toastify";

export const imageUploadAction = (value) => async (dipatch) => {
  console.log(value);
  dipatch({ type: IMG_UPLOAD_REQ });
  const formData = await new FormData();
  formData.append("file", value);

  try {
    const imgUpload = await axios.post(`${API_BASE_URL}${uploadImg}`, formData);
    dipatch({
      type: IMG_UPLOAD_SUCCESS,
      data: imgUpload.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dipatch({
      type: IMG_UPLOAD_FAIL,
      data: {
        status: error.response.status,
        message: error.response.data.message,
      },
    });
  }
};
