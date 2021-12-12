import axios from "axios";
import { API_BASE_URL } from "../constants/base_url";
import authHeader from "./authHeader";

class UserService {
  getRequest(base_url) {
    return axios.get(`${API_BASE_URL}${base_url}`, { headers: authHeader() });
  }

  patchRequest(base_url, body) {
    return axios.patch(`${API_BASE_URL}${base_url}`, body, {
      headers: authHeader(),
    });
  }
  postRequest(base_url, body) {
    return axios.post(`${API_BASE_URL}${base_url}`, body, {
      headers: authHeader(),
    });
  }
  putRequest(base_url, body) {
    return axios.put(`${API_BASE_URL}${base_url}`, body, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
