import axios from "axios";
import { toast } from "react-toastify";

export const ApiService = () => {
  const params = {
    baseURL: "http://127.0.0.1:8000/api/",
  };
  const axiosInstance = axios.create(params);

  axiosInstance.interceptors.response.use(
    (response) => success(response),
    (error) => errorHandler(error)
  );

  const success = (response) => {
    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      toast.success(response.data.success);
    }
    return response;
  };

  const errorHandler = (error) => {
    if (error.response.data) {
      if (
        error.response.status === 403 &&
        error.response.data.detail ===
          "Authentication credentials were not provided."
      ) {
        throw new Error("Unauthorized");
      }
      toast.error(error.response.data.error);
      return Promise.reject(error.response.data);
    } else {
      toast.error("Error loading page!!");
    }

    return Promise.reject(error);
  };

  return axiosInstance;
};
