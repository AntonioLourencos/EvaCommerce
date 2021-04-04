import axios from "axios";

const url = "https://eva-test.herokuapp.com/";

const api = axios.create({
  baseURL: url,
});

export default api;