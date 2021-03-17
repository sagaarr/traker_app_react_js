import axios from "axios";
import { API_BASE_URL } from "../constants/base_url";


class AuthService {
  login(base_url, body) {
    return axios
      .post(`${API_BASE_URL}${base_url}` , body)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }

        return response.data;
      });
  }



  register(body, base_url) {
    return axios.post(`${API_BASE_URL}/${base_url}`, body);
  }
}

export default new AuthService();
