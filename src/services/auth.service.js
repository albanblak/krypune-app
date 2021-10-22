import axios from "axios";

const APILOGIN = "http://localhost:7000/auth/signin";

class AuthService {
  login(email, password) {
    return axios
      .post(APILOGIN, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message === "success" && response.data.accessToken) {
          localStorage.setItem("user", response.data.accessToken);
        }
        return response.data;
      });
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
}

export default new AuthService();
