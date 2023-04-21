import styles from "../../styles/Home.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import { useContext, useRef } from "react";
import { context } from "../Context";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from "next/link";
import { currencyFormat, addOrder } from "@/public/js/functions";

function Item({ values }) {
    const { items, setItems, totalPrice, setTotalPrice } = useContext(context);
    const addButtonRef = useRef(null);
    const addTextRef = useRef(null);
    const addLoadingRef = useRef(null);

    const addEffect = () => {
        addButtonRef.current.style.backgroundColor = 'green';
        addTextRef.current.style.display = 'none';
        addLoadingRef.current.style.display = 'block';
        setTimeout(() => {
            addButtonRef.current.style.backgroundColor = '';
            addTextRef.current.style.display = 'block';
            addLoadingRef.current.style.display = 'none';
        }, 1000);
    }
    return (
        <li className={styles.sectionTwo__item}>
            <div className={styles.sectionTwo__item__rowOne}>
                <BsQuestionCircle
                    className={styles.sectionTwo__item__infoIcon}
                />
                <div className={styles.sectionTwo__item__colors}>
                    <div
                        className={styles.sectionTwo__item__colorCircle}
                        id="bg_red"></div>
                    <div
                        className={styles.sectionTwo__item__colorCircle}
                        id="bg_black"></div>
                </div>
            </div>
            <div className={styles.sectionTwo__item__rowTwo}>
                <div className={styles.sectionTwo__item__imageBox}>
                    <Link href={'/details/' + values.id}>
                        <div className={styles.sectionTwo__item__slider}>
                            <img src={"/pics/laptop.png"} alt="product image" />
                        </div>
                    </Link>
                    {/* <div className={styles.sectionTwo__item__dots}>
                        <div></div>
                        <div></div>
                        <div id="active_dot"></div>
                    </div> */}
                    <div className={styles.sectionTwo__item__info}>
                        <span className={styles.sectionTwo__item__productName}>
                            {values.name}
                        </span>
                        <br />
                        <span>حافظه : </span>
                        <span className={styles.sectionTwo__item__productMemory}>
                            {values.memory}
                        </span>
                        <br />
                        <span>گرافیک : </span>
                        <span className={styles.sectionTwo__item__productGraphic}>
                            {values.graphic}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.sectionTwo__item__rowThree}>
                <button ref={addButtonRef} onClick={() => { addOrder(items, setItems, values, totalPrice, setTotalPrice); addEffect() }} className={styles.sectionTwo__item__addBtn}>
                    <span ref={addTextRef}>افزودن</span>
                    <span className={styles.loadingIndicatorContainer} ref={addLoadingRef}>
                        <AiOutlineLoading3Quarters className={styles.loadingIndicator} />
                    </span>
                </button>
                <span className={styles.sectionTwo__item__priceBox}>
                    <span className={styles.sectionTwo__item__price}>
                        {currencyFormat(values.price)}
                    </span>
                    تومان
                </span>
            </div>
        </li>
    )
}

export default Item