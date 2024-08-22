import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

export const searchPhotos = (params) => {
  return axios
    .get("/search/photos", {
      params: {
        client_id: apiKey,
        ...params,
      },
    })
    .then((r) => r.data);
};
