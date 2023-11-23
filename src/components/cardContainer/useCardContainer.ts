import { useEffect, useState } from "react";
import axios from "axios";
import { CatBreedType } from "../../types/types";

export const useCardContainer = () => {
  const [catsData, setCatsData] = useState<CatBreedType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  const getPassengersData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://catfact.ninja/breeds?page=${page}&limit=9`
      );
      setCatsData((prev) => [...prev, ...response.data.data]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(catsData);

  useEffect(() => {
    getPassengersData();
  }, [page]);

  const handleScrollEvent = async () => {
    const totalHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    try {
      if (innerHeight + scrollTop + 1 >= totalHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return { catsData, isLoading };
};
