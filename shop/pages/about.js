import styles from "/styles/About.module.css";

function about() {
  return (
    <div className={styles.main} id="main">
      <div className={styles.main__content}>
        <div className={styles.main__container}>
          <div className={styles.main__context}>
            <span>درباره ما</span>
            <span>
              شرکت مرکز فروش، سایتی معتبر جهت خرید انواع لوازم الکترونیک می باشد
              که از سال 1380 فعالیت رسمی خود را به هدف بهبود کیفیت خرید آغاز
              کرده است تا راحتی و آسایش را برای هم میهنان عزیز به ارمغان آورد.
            </span>
            <span>مدیریت سایت مرکز فروش</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
