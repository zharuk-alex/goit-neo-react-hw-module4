import styles from "./ImageCard.module.css";

const ImageCard = ({ id, src, alt, onClick }) => (
  <div className={styles.imageCard} onClick={() => onClick(id)}>
    <img className={styles.imageCardImg} src={src} alt={alt} />
  </div>
);

export default ImageCard;
