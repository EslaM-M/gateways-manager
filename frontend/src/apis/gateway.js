import axiosInstance from "../libs/axiosInstance";

export const fetchGateways = async () => {
  const { data } = await axiosInstance({
    url: `/gateway`,
    method: "GET",
  });
  return data;
};

export const addGateWay = async ({ name, ipAddress }) => {
  const { data } = await axiosInstance({
    url: `/gateway`,
    method: "POST",
    data: {
      name,
      ipAddress,
    },
  });
  return data;
};
