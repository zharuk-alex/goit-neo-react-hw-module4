import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "S8sq9qcnVnL74Acir7fAHSEHkV84OCo6feobVTgtTF4";

export const searchPhotos = (params) => {
  return axios
    .get("/search/photos", {
      params: {
        client_id: API_KEY,
        ...params,
      },
    })
    .then((r) => r.data);
};
