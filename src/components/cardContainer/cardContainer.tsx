import { Card, Loader } from "..";
import { useCardContainer } from "./useCardContainer";
import styles from "./cardContainer.module.scss";

export const CardContainer = () => {
  const { catsData, isLoading } = useCardContainer();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          Cats <span>Breeds</span>
        </div>
        <img className={styles.image} src="./logo.png" />
        <div className={styles.cards}>
          {catsData &&
            catsData.map((cat, idx) => {
              return <Card data={cat} key={idx} />;
            })}
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </>
  );
};
