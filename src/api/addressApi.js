import axiosClient from "./axiosClient";

const addressApi = {
  getDiaChiById: (id) => {
    const url = "/api/diachi/getdiachidathang/" + id;
    return axiosClient.get(url);
  }
}
export default addressApi;