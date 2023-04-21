import styles from "/styles/Header.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { useContext } from "react";
import { context } from "../Context";


function SearchBox() {
  const { setIsSearch } = useContext(context);
  const { isSearch } = useContext(context);
  return (
    <div className={styles.SearchBox} id={isSearch ? "show" : "hide"}>
      <div
        className={styles.SearchBox__closeArea}
        onClick={() => setIsSearch(false)}></div>
      <div className={styles.SearchBox__content}>
        <span className={styles.SearchBox__title} id="searchbox_title">
          <span>جستجو محصول</span>
        </span>
        <input
          type="text"
          className={styles.SearchBox__input}
          id="searchbox_input"
          autoFocus
        />
        <RiSearch2Line className={styles.SearchBox__icon} />
      </div>
    </div>
  );
}

export default SearchBox;
