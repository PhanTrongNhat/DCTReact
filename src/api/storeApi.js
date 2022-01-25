import axiosClient from "./axiosClient";
import axios from "axios";
const StoreApi = {
  getAllStore: () => {
    const url = "/api/CuaHang/TatCaCuaHang";
    return axiosClient.get(url);
  },
  getProductByStore:(id)=>{
       const url = "http://localhost:8080/api/cua-hang-san-pham/"+id;
       return axios.get(url);
  }

};

export default StoreApi;
