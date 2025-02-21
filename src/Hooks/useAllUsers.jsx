import useUrl from "./useAxiosUrl";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = (search) => {
  const useUrls = useUrl;

  // TanStack Query
  const { refetch, data = [] } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await useUrls.get(search);
      return res.data;
    },
    enabled: !!search,
  });

  return [data, refetch];
};

export default useAllUsers;
