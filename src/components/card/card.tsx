import { CatBreedType } from "../../types/types";
import styles from "./card.module.scss";

interface CardProps {
  data: CatBreedType;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{data.breed}</div>
      <div>{data.country}</div>
      <div>{data.origin}</div>
      <div>{data.coat}</div>
      <div>{data.pattern}</div>
    </div>
  );
};
