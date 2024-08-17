import styles from "./LoadMoreBtn.module.css";

export default ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Load more
    </button>
  );
};
