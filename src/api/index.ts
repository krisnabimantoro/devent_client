import axios from "axios";
const Api = axios.create({
  baseURL: "http://localhost:8012",
});
export default Api;