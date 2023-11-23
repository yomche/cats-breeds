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
        <div className={styles.image}>
          <img src="./logo.png" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            {catsData &&
              catsData.map((cat, idx) => {
                return <Card data={cat} key={idx} />;
              })}
            <div></div>
            <Loader isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};
