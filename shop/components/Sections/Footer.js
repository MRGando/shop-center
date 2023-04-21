import styles from "/styles/Footer.module.css";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.sectionThree}>
        <IoIosArrowUp
          className={styles.sectionThree__scrollTopIcon}
          id="scroll_top_btn"
        />
        <div className={styles.sectionThree__container}>
          <div className={styles.sectionThree__boxOne}>
            <div className={styles.sectionThree__contacts}>
              <span className={styles.sectionThree__title}>
                راه های ارتباطی
              </span>
              <div className={styles.sectionThree__info}>
                <p>
                  آدرس : <span>تهران، خیابان ستارخان، نبش جمهوری 12</span>
                </p>
                <p>
                  تلفن : <span>021-345-543</span>
                </p>
                <p>
                  ایمیل : <span>info@site.com</span>
                </p>
              </div>
            </div>
            <div className={styles.sectionThree__tagsBox}>
              <span className={styles.sectionThree__title}>تگ ها</span>
              <div className={styles.sectionThree__tags}>
                <span>لپتاپ</span>
                <span>گوشی_سامسونگ</span>
                <span>مانیتور_ال_جی</span>
                <span>گوشی_سونی</span>
                <span>تلویزیون</span>
                <span>هدفون_ال_جی_بی</span>
                <span>هندزفری</span>
                <span>بخاری_برفی</span>
                <span>کولر</span>
                <span>هندزفری</span>
                <span>مانیتور_ال_جی</span>
                <span>تلویزیون</span>
                <span>هدفون_ال_جی_بی</span>
                <span>هندزفری</span>
              </div>
            </div>
          </div>
          <div className={styles.sectionThree__borderline}></div>
          <div className={styles.sectionThree__boxTwo}>
            <div className={styles.sectionThree__about}>
              <span className={styles.sectionThree__title}>درباره ما</span>
              <p className={styles.sectionThree__context}>
                شرکت مرکز فروش، سایتی معتبر جهت خرید انواع لوازم الکترونیک می
                باشد که از سال 1380 فعالیت رسمی خود را به هدف بهبود کیفیت خرید
                آغاز کرده است تا راحتی و آسایش را برای هم میهنان عزیز به ارمغان
                آورد.
              </p>
            </div>
            <div className={styles.sectionThree__achievements}>
              <img src="/pics/brand-1.png" alt="brand-1" />
              <img src="/pics/brand-2.png" alt="brand-2" />
            </div>
          </div>
        </div>
        <div className={styles.sectionThree__footer}>
          <span>طراحی شده توسط fitdesign.ir</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
