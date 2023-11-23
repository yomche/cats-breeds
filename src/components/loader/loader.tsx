import { Bars } from "react-loader-spinner";
import styles from "./loader.module.scss";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <Bars
        height="80"
        width="80"
        color="#F09667"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
      />
    </div>
  );
};
