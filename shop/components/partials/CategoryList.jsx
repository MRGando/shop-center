import styles from "/styles/Header.module.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { useEffect, useContext, useRef } from "react";
import { context } from "../Context";
function CategoryList() {
  const { showCats, setShowCats, setShowOrder } = useContext(context);
  const miniCategoryPanelRef = useRef(null);
  useEffect(() => {
    if (showCats) {
      miniCategoryPanelRef.current.style.bottom = "0";
      setShowOrder(false);
    } else {
      miniCategoryPanelRef.current.style.bottom = "-100%";
    }
  }, [showCats]);
  return (
    <ul
      ref={miniCategoryPanelRef}
      className={styles.miniCategoryPanel}
      id="ordersPanel">
      <li className={styles.miniCategoryPanel__sectionOne}>
        <span className={styles.miniCategoryPanel__orderPanelTitle}>
          <BiCategoryAlt className={styles.miniCategoryPanel__bagSVG} />
        </span>
        <span>دسته بندی ها</span>
      </li>
      <ul className={styles.miniCategoryPanel__list}>
        <li className={styles.miniCategoryPanel__item}>
          <span>موبایل</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>لپتاپ</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>مانیتور</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>هندزفری</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>تلویزیون</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>مچ بند</span>
          <MdKeyboardArrowLeft />
        </li>
        <li className={styles.miniCategoryPanel__item}>
          <span>فلش مموری</span>
          <MdKeyboardArrowLeft />
        </li>
      </ul>
    </ul>
  );
}

export default CategoryList;
