import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useSearch = (text, category) => {
  // Category ID and search Text
  const { data, isLoading, error } = useSWR(
    `/api/search?keyword=${text}&category=${category}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  // Return Response
  return {
    products: data?.products,
    loading: isLoading,
    error,
  };
};
