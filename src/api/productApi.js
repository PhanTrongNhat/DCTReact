import axiosClient from "./axiosClient";
import axios from "axios";
const ProductApi = {
  getAll: () => {
    // const url = "/api/sanpham/tatcasanpham";
    return axios.get("http://localhost:8080/api/san-pham");
  },
  getId: (params) => {
    // const url = "/api/sanpham/sanpham/" + params;
    return axios.get("http://localhost:8080/api/san-pham/" + params);
  },
  searchByName: (query) => {
    // const url = "/api/sanpham/sanpham/" + params;
    return axiosClient.get("api/SanPham/SanPhamTheoTen?name=" + query);
  },
  getSPbyPrice:(params)=>{
     return axios.get(`http://localhost:8080/api/san-pham-gia/${params.from}/${params.to}`);
 
  }
  // getAll: () => {
  //   const url = "/products";
  //   return axiosClient.get(url);
  // },
  // getId: (params) => {
  //   const url = "/products";
  //   return axiosClient.get(url, { params });
  // },
  // postComment:(data)=>{
  //   const url = "/products/comment";
  //   return axiosClient.post(url,data);
  // }
};

export default ProductApi;
