import styles from "/styles/Header.module.css";
import { useContext, useRef } from "react";
import { context } from "../Context";
import { AiOutlineClose } from "react-icons/ai";
function Auth() {
  const { userLogin, setUserLogin, setShowAuth } = useContext(context);
  const blurSectionRef = useRef();

  return (
    <>
      <div className={styles.AuthContainer} ref={blurSectionRef}>
        <div
          onClick={() => setShowAuth(false)}
          className={styles.windowCloser}></div>
        <div className={styles.AuthContainer__content}>
          <span
            onClick={() => setShowAuth(false)}
            className={styles.AuthContainer__closeButton}>
            <AiOutlineClose />
          </span>
          <div
            className={styles.AuthContainer__buttons}
            id={userLogin ? "loginButton" : "signupButton"}>
            <button onClick={() => setUserLogin(true)}>ورود</button>
            <button onClick={() => setUserLogin(false)}>عضویت</button>
          </div>
          <div className={styles.AuthContainer__forms}>
            {userLogin ? (
              <div className={styles.AuthContainer__form}>
                <form>
                  <label htmlFor="username">نام کاربری</label>
                  <br />
                  <input type="text" name="username" id="username" />
                  <br />
                  <label htmlFor="password">رمز عبور</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  <button type="submit">ورود</button>
                </form>
              </div>
            ) : (
              <div className={styles.AuthContainer__form}>
                <form>
                  <label htmlFor="username">نام کاربری</label>
                  <br />
                  <input type="text" name="username" id="username" />
                  <br />
                  <label htmlFor="password">رمز عبور</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  <br />
                  <label htmlFor="repassword">تکرار رمز عبور</label>
                  <br />
                  <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    autoComplete="new-password"
                  />
                  <button type="submit">عضویت</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
