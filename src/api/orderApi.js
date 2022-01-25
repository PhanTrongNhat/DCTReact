import axiosClient from "./axiosClient";
import axios from "axios";
const orderApi = {
  order: (params) => {
    const url = "/api/donhang/khachhangdathang";
    return axiosClient.post(url, params);
  },
  getOrderByIdKhachHang: (params) => {
    return axios.get("http://localhost:8080/api/don-hang-user/" + params);
  },
  getId: (params) => {
    // const url = "/api/sanpham/sanpham/" + params;
    return axios.get("http://localhost:8080/api/san-pham/" + params);
  },
  getOrderByIdKHandStatus: (params) => {
    return axios.get(
      `http://localhost:8080/api/don-hang-user-ttdh/${params.idUser}/${params.idTT}`
    );
  },
  getDetailOrder: (params) => {
    return axios.get("http://localhost:8080/api/ctdh/" + params);
  },
};

export default orderApi;
