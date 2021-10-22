import axios from "axios";
import AuthService from "./auth.service";
import useFetch from "../hooks/useFetch";

class ResumeService {
  createFormData(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profesioni", data.profesioni);
    formData.append("address", data.address);
    formData.append("norma", data.norma);
    formData.append("content", data.content);
    formData.append("skills", data.skills);
    formData.append("image", data.image);
    formData.append("urls", JSON.stringify(data.urls));
    formData.append("educations", JSON.stringify(data.educations));
    formData.append("experience", JSON.stringify(data.experience));
    return formData;
  }

  sendResume(data) {
    const formData = this.createFormData(data);
    return axios
      .post("http://localhost:7000/resume/add", formData, {
        headers: {
          Authorization: `Bearer ${AuthService.getCurrentUser()}`,
          "Content-Type": "multipart/form-data;   ",
        },
      })
      .then((resdata) => {
        return resdata;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  updateResume(resumeId, data) {
    const formData = this.createFormData(data);
    formData.append("resumeId", resumeId);
    return axios
      .post(`http://localhost:7000/resume/update`, formData, {
        headers: {
          Authorization: `Bearer ${AuthService.getCurrentUser()}`,
          "Content-Type": "multipart/form-data;   ",
        },
      })
      .then((result) => {
        console.log("from updateResume");
        console.log(result);
        return result;
      })
      .catch((err) => {
        return err;
      });
  }



  getResumeCount(){
      return axios
          .get('http://localhost:7000/resume', {
              headers:{
                  Authorization: `Bearer ${AuthService.getCurrentUser()}`,
              }
          })
          .then(res => {
              console.log(res.data.data);
              return res;
          })
          .catch(err => {
              console.log(err);
              return err;
          });
  }

  getResume() {
    return axios
      .get("http://localhost:7000/resume", {
        headers: {
          Authorization: `Bearer ${AuthService.getCurrentUser()}`,
        },
      })
      .then((resdata) => {
        return resdata;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

export default new ResumeService();
