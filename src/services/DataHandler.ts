import { useEffect, useState } from "react";
import { IProductData } from "../shared/Types";

interface IApiData<T> {
  data?: T;
  isLoading: boolean;
  isError: boolean;
}

export const useProductData = () => {
  const API_URL = "https://demo7242716.mockable.io/products";
  const [data, setData] = useState<IApiData<IProductData>>({
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    const fetchProducts = () =>
      fetch(API_URL)
        .then((res) => res.json())
        .then(
          (
            products: IProductData // success, render products
          ) => setData({ data: products, isLoading: false, isError: false })
        )
        .catch((err) => {
          // Error, show error screen, recall fetch after 5 seconds
          console.error("error fetching products :: ", err);
          setData({ data: undefined, isLoading: false, isError: true });
          setTimeout(fetchProducts, 5000);
        });
    fetchProducts();
  }, []);

  return data;
};
