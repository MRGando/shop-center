import styles from "/styles/Contact.module.css";

function contact() {
  return (
    <div className={styles.main} id="main">
      <div className={styles.main__content}>
        <div className={styles.main__container}>
          <div className={styles.main__context}>
            <span>تماس با ما</span>
            <span>
              با ارسال نظرات، پیشنهادات و انتقادات خود در راستای حمایت و افزایش
              کیفیت سایت ما را یاری رسانید گروه پشتیبانی ما تمام وقت آماده
              پاسخگویی به شما عزیزان می باشد.
            </span>
            <form
              className={styles.main__contactForm}
              onSubmit={() => this.preventDefault()}>
              <input
                type="text"
                name="name"
                id="name_input"
                placeholder="نام"
                required
              />
              <input
                type="email"
                name="email"
                id="email_input"
                placeholder="ایمیل"
                required
              />
              <textarea
                name="message"
                id="message_input"
                cols="10"
                rows="5"
                placeholder="پیام"></textarea>
              <button className={styles.main__submitBtn}>ارسال</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
