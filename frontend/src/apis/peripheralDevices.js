import axiosInstance from "../libs/axiosInstance";

export const fetchPeripheralDevices = async (gatewayId) => {
  const { data } = await axiosInstance({
    url: `/peripheral_device/${gatewayId}`,
    method: "GET",
  });
  return data;
};

export const deletePeripheralDevices = async (deviceId) => {
  const { data } = await axiosInstance({
    url: `/peripheral_device/${deviceId}`,
    method: "delete",
  });
  return data;
};

export const addPeripheralDevices = async ({ vendor, status, gateway }) => {
  const { data } = await axiosInstance({
    url: `/peripheral_device`,
    method: "POST",
    data: {
      vendor,
      status,
      gateway,
    },
  });
  return data;
};

export const updatePeripheralDevices = async ({
  vendor,
  status,
  gateway,
  id,
}) => {
  const { data } = await axiosInstance({
    url: `/peripheral_device/${id}`,
    method: "PUT",
    data: {
      vendor,
      status,
      gateway,
    },
  });
  return data;
};
