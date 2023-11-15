import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useBrands = () => {
  // request to brands apis
  const { data, isLoading, error } = useSWR(`/api/brands`, fetcher, {
    revalidateOnFocus: false,
  });
  // Return Response
  return {
    products: data?.brands,
    isLoading,
    error,
  };
};
