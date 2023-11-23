import Flag from "react-world-flags";
import { CatBreedType } from "../../types/types";
import { CountriesMap } from "../../utils/countries";
import Unknown from "../../assets/Unknown_flag.png";
import styles from "./card.module.scss";

interface CardProps {
  data: CatBreedType;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <a
          href={`https://www.google.com/search?q=${data.breed}+сat&newwindow=1`}
          target="_blank"
        >
          {data.breed}
        </a>
        <Flag
          className={styles.flag}
          code={CountriesMap[data.country]}
          height="20"
          fallback={<img src={Unknown} height={20} width={40} />}
        />
      </div>
      {data.origin && (
        <div className={styles.item}>
          <p>Origin: </p>
          {data.origin}
        </div>
      )}
      {data.coat && (
        <div className={styles.item}>
          <p>Coat: </p>
          {data.coat}
        </div>
      )}
      {data.pattern && (
        <div className={styles.item}>
          <p>Pattern: </p>
          {data.pattern}
        </div>
      )}
    </div>
  );
};
