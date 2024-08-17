import styles from "./ImageModal.module.css";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";

const ImageModal = ({ isOpen, img = {}, closeModal }) => {
  const { urls: { regular: src } = {}, description } = img || {};
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div>
        <button className={styles.btnClose} onClick={closeModal}>
          <MdClose />
        </button>
      </div>
      <img className={styles.img} src={src} alt={description} />
    </Modal>
  );
};

export default ImageModal;
