// import axiosClient from "./axiosClient";
import axios from "axios";
const orderStatusApi = {
  getAll: () => {
    // const url = "/api/sanpham/tatcasanpham";
    return axios.get("http://localhost:8080/api/trang-thai-don-hang");
  },
  getId: (params) => {
    // const url = "/api/sanpham/sanpham/" + params;
    return axios.get("http://localhost:8080/api/san-pham/" + params);
  },
};
export default orderStatusApi;
