import styles from "./SearchBar.module.css";
import { MdOutlineSearch } from "react-icons/md";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const submitHandle = (evt) => {
    evt.preventDefault();

    const { value } = evt.target.elements.search;

    if (!value?.trim()) {
      toast.error("Seacrh field is empty!");
      return;
    }

    onSubmit(value);
  };

  return (
    <header className={styles.toolbar}>
      <form onSubmit={submitHandle}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
          <button className={styles.btn} type="submit">
            <MdOutlineSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
