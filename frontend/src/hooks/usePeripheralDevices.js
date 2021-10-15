import { fetchPeripheralDevices } from "../apis/peripheralDevices";
import { useQuery } from "react-query";

export const usePeripheralDevices = (gatewayId) => {
  return useQuery(
    ["peripheralDevices", gatewayId],
    () => fetchPeripheralDevices(gatewayId),
    {
      initialData: [],
      refetchOnWindowFocus: false,
    }
  );
};
