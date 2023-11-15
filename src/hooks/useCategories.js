import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useCategories = () => {
  // request to brands apis
  const { data, isLoading, error } = useSWR(`/api/categories`, fetcher, {
    revalidateOnFocus: false,
  });
  // Return Response
  return {
    categories: data?.categories,
    isLoading,
    error,
  };
};
