import styles from "/styles/Home.module.css";
import { ImStopwatch } from "react-icons/im";
import { BiUserVoice } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";

function SectionOne() {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.sectionOne__container}>
        <div className={styles.sectionOne__content}>
          <img
            className="forbiddenToMove"
            src="/pics/product.png"
            alt="تصویر محصولات"
          />
          <div className={styles.sectionOne__context}>
            <span className={styles.sectionOne__context__title}>
              مرکز خرید لوازم الکترونیک.
            </span>
            <span className={styles.sectionOne__context__desc}>
              فروش انواع لوازم الکترونیک تا{" "}
              <span className={styles.boldText}>50%</span> تخفیف به مناسبت
              <span className={styles.boldText}> شب یلدا🎉🎉</span>
            </span>
          </div>
          <div className={styles.sectionOne__cards}>
            <div>
              <span className={styles.sectionOne__cards__title}>
                ارسال فوری
              </span>
              <span className={styles.sectionOne__cards__desc}>
                پس از انجام پروسه خرید تمامی محصولات بصورت آنی تحویل پست گردیده
                و جهت ارسال به مقصد آماده میشوند
              </span>
              <ImStopwatch className={styles.sectionOne__cards__icon} />
            </div>
            <div>
              <span className={styles.sectionOne__cards__title}>
                پشتیبانی 24 ساعته
              </span>
              <span className={styles.sectionOne__cards__desc}>
                پشتیبانی ما بصورت 24 ساعته و 7 روز هفته آماده خدمات رسانی به
                کاربران عزیز سایت میباشند
              </span>
              <BiUserVoice className={styles.sectionOne__cards__icon} />
            </div>
            <div>
              <span className={styles.sectionOne__cards__title}>
                ضمانت محصولات
              </span>
              <span className={styles.sectionOne__cards__desc}>
                گارانتی تمامی محصولات بصورت بی قید و شرط بوده و در صورت بروز
                هرگونه مشکل میتوانید محصول را تعویض نمایید
              </span>
              <SiAdguard className={styles.sectionOne__cards__icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
