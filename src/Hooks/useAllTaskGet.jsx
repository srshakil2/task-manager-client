import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const useAllTaskGet = (apis) => {
  const { refetch, data = [] } = useQuery({
    queryKey: [`${apis}`, apis],
    queryFn: async () => {
      const res = await axios.get(apis);
      return res.data;
    },
    enabled: !!apis,
  });
  return [data, refetch];
};

export default useAllTaskGet;
