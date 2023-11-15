import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useProduct = (typesOfSale) => {
  // typesOfSale = flash_sale | push | best_sale | popular | feature | new | undefined
  const { data, isLoading, error } = useSWR(
    `/api/products?types=${typesOfSale}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  // Return Response
  return {
    products: data?.products,
    isLoading,
    error,
  };
};
