import { CatBreedType } from "../../types/types";
import styles from "./card.module.scss";

interface CardProps {
  data: CatBreedType;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.contentCard}>
      <div className={styles.cardHeader}>
        <h3>{data.breed}</h3>
      </div>
      <div>{data.breed}</div>

      <p className={styles.trips}>{data.breed}</p>
    </div>
  );
};
