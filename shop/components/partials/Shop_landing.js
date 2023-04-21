import styles from "/styles/Shop.module.css";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
export default function Shop_landing() {
  const [words, setWords] = useState([
    "لپتاپ ایسوس",
    "گوشی شیاومی",
    "مانیتور سونی",
    "گوشی سامسونگ",
  ]);
  const [currentText, setCurrentText] = useState(words[0]);
  let index = 0;
  useEffect(() => {
    // Creates a new timer when mount the component.
    const timer = setInterval(() => {
      if (index === words.length - 1) index = 0;
      else index += 1;
      setCurrentText(words[index]);
    }, 2000);

    // Stops the old timer when umount the component.
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.shopLanding}>
      <div className={styles.shopLanding__item}>
        <img src="/pics/5.png" alt="commercial image" />
        <div className={styles.shopLanding__introContext}>
          <p className={styles.shopLanding__title}>خرید داری؟</p>
          <p className={styles.shopLanding__desc}>
            بیش از 2000+ کالای الکترونیک با قیمتی مناسب
          </p>
          <div className={styles.shopLanding__search}>
            <input
              className={styles.shopLanding__searchBox}
              type="text"
              placeholder={currentText}
            />
            <CiSearch className={styles.shopLanding__searchIcon} />
          </div>
        </div>
      </div>
      <div className={styles.shopLanding__item}>
        <img src="/pics/1.png" alt="commercial image" />
        <div className={styles.shopLanding__smallBoxContext}>
          <div className={styles.shopLanding__badge}>تعداد محدود</div>
          <div className={styles.shopLanding__smallBoxContext__content}>
            <span>لپتاپ Acer مدل 2021</span>
            <p>قیمت : 60،000،000</p>
          </div>
        </div>
      </div>
      <div className={styles.shopLanding__item}>
        <img src="/pics/6.png" alt="commercial image" />
        <div className={styles.shopLanding__smallBoxContext}>
          <div className={styles.shopLanding__smallBoxContext__content}>
            <span>آیفون 14 پرو مکس ریجن LA</span>
            <p>قیمت : 30،000،000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
