import { fetchGateways } from "../apis/gateway";
import { useQuery } from "react-query";

export const useGateways = () => {
  return useQuery("gateways", () => fetchGateways(), {
    initialData: [],
    refetchOnWindowFocus: false,
  });
};
