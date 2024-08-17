import styles from "./ImageGallery.module.css";
import ImageCard from "components/ImageCard/ImageCard";

const ImageGallery = ({ images = [], onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(({ id, ...image }) => (
        <li key={id} className={styles.imageGalleryItem}>
          <ImageCard
            id={id}
            src={image.urls.small}
            alt={image.alt_description}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
