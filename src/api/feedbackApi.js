import axiosClient from "./axiosClient";

const StoreApi = {
  feedback: (data) => {
    const url = "/api/danhgia/taodanhgia";
    return axiosClient.post(url, data);
  },
  CheckfeedbackOrder: (data) => {
    const url = "/api/danhgia/kiemtradanhgia/" + data;
    return axiosClient.get(url);
  },
};

export default StoreApi;
