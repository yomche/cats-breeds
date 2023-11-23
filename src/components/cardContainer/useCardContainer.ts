import { useEffect, useState } from "react";
import axios from "axios";
import { CatBreedType } from "../../types/types";

export const useCardContainer = () => {
  const [catsData, setCatsData] = useState<CatBreedType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const apiEndpoint = `https://catfact.ninja/breeds?page=${page}&limit=9`;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiEndpoint);
      setCatsData((prev) => [...prev, ...response.data.data]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = async () => {
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
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { catsData, isLoading };
};
