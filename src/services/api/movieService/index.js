import axios from "axios";

export default {
  getdata: async (url) => {
    const response = await axios.get(url);
    return response;
  },
};
