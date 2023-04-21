import styles from "/styles/Header.module.css";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { context } from "../Context";
import Bottom_menu from "@/components/partials/Bottom_menu";
import Link from "next/link";
import OrdersPanel from "../partials/OrdersPanel";
import Auth from "../partials/Auth";

function Header() {
  const { setIsSearch, items, showOrder, setShowOrder, ordersPanelRef, showAuth, setShowAuth, checkboxRef, menuStatus, setMenuStatus } =
    useContext(context);

  useEffect(() => {
    if (showOrder) ordersPanelRef.current.style.display = "flex";
    else ordersPanelRef.current.style.display = "none";
  }, [showOrder]);

  return (
    <>
      <div className={styles.Header} id="header">
        <div className={styles.Header__container}>
          <Link href="/">
            <img
              className={styles.Header__logo}
              src="/pics/Logo.png"
              alt="آیکون مرکز خرید"
            />
          </Link>
          <ul className={styles.Header__menu}>
            <Link href="/">
              <li>خانه</li>
            </Link>
            <li className={styles.Header__menu__categories_btn}>
              دسته بندی
              <IoIosArrowDown />
              <ul
                className={styles.Header__menu__categories}
                id="categories_section">
                <li className={styles.Header__menu__categories__container}>
                  <span>گوشی</span>
                  <ul className={styles.Header__menu__categories__smaller}>
                    <li>Samsung</li>
                    <li>Nokia</li>
                    <li>Xiaomi</li>
                    <li>Iphone</li>
                    <li>BlackBerry</li>
                    <li>LG</li>
                    <li>huawei</li>
                  </ul>
                </li>
                <li className={styles.Header__menu__categories__container}>
                  <span>لپتاپ</span>
                  <ul className={styles.Header__menu__categories__smaller}>
                    <li>Lenovo</li>
                    <li>Asus</li>
                    <li>Samsung</li>
                    <li>Tushiba</li>
                    <li>Xiaomi</li>
                    <li>LG</li>
                    <li>Sony</li>
                  </ul>
                </li>
                <li className={styles.Header__menu__categories__container}>
                  <span>مانیتور</span>
                  <ul className={styles.Header__menu__categories__smaller}>
                    <li>Maya</li>
                    <li>Sony</li>
                    <li>LG</li>
                    <li>Samsung</li>
                  </ul>
                </li>
                <li className={styles.Header__menu__categories__container}>
                  <span>کنسول بازی</span>
                  <ul className={styles.Header__menu__categories__smaller}>
                    <li>Xbox</li>
                    <li>PlayStation</li>
                    <li>Sega</li>
                  </ul>
                </li>
              </ul>
            </li>
            <Link href="/shop"><li>فروشگاه</li></Link>
            <Link href="/about">
              <li>درباره ما</li>
            </Link>
            <Link href={"/contact"}>
              <li>پشتیبانی</li>
            </Link>
          </ul>
          <div className={styles.Header__options}>
            <RiSearch2Line onClick={() => setIsSearch(true)} id="search_icon" />
            <HiOutlineUserCircle onClick={() => setShowAuth(true)} />
            <HiOutlineShoppingBag
              onClick={() => setShowOrder(!showOrder)}
              className={styles.Header__showOrdersBtn}
              id="showOrdersBtn"
            />
            <span className={styles.Header__options__shopAmount}>
              {items.length}
            </span>
            <OrdersPanel />

          </div>
        </div>
      </div>
      {/* header for mobile */}
      <div className={styles.mobileHeader} id="header">
        <Link href={"/"}>
          <img
            className={styles.Header__logo}
            src="/pics/Logo.png"
            alt="آیکون مرکز خرید"
          />
        </Link>
        <input
          ref={checkboxRef}
          className={styles.mobileHeader__checkbox}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onClick={() => setMenuStatus(!menuStatus)}
        />
        <label
          htmlFor="checkbox"
          className={styles.mobileHeader__hambMenuBtn}
          id="hambMenu_btn">
          <span style={menuStatus ? { backgroundColor: "white" } : null}></span>
          <span style={menuStatus ? { backgroundColor: "white" } : null}></span>
          <span style={menuStatus ? { backgroundColor: "white" } : null}></span>
        </label>
        <ul className={styles.mobileHeader__menu}>
          <Link href={"/contact"}>
            <li>پشتیبانی</li>
          </Link>
          <li onClick={() => alert("در حال آماده سازی بخش ...")}>دریافت کد API</li>
          <Link href={"/about"}>
            <li>درباره ما</li>
          </Link>
        </ul>
      </div >
      <Bottom_menu />
      {showAuth ? <Auth /> : null}
    </>
  );
}

export default Header;
