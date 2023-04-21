import { currencyFormat } from "@/public/js/functions";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { context } from "../Context";
import styles from "/styles/Header.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";

function MiniOrderPanel() {
  const {
    items,
    setItems,
    totalPrice,
    setTotalPrice,
    miniOrdersPanelRef,
    showOrder,
    setShowOrder,
    setShowCats,
  } = useContext(context);

  function deleteItem(singleItem) {
    const filterd = items.filter((item) => item.orderId !== singleItem.orderId);
    setItems(filterd);
    setTotalPrice(totalPrice - singleItem.price);
  }
  useEffect(() => {

    if (showOrder) {
      miniOrdersPanelRef.current.style.bottom = "0";
      setShowCats(false);
    } else {
      miniOrdersPanelRef.current.style.bottom = "-100%";
    }
  }, [showOrder]);
  return (
    <ul
      ref={miniOrdersPanelRef}
      className={styles.miniOrdersPanel}
      id="ordersPanel">
      <li className={styles.miniOrdersPanel__sectionOne}>
        <span className={styles.miniOrdersPanel__orderPanelTitle}>
          <HiOutlineShoppingBag className={styles.miniOrdersPanel__bagSVG} />
        </span>
        <span>{items.length} آیتم</span>
      </li>
      <ul className={styles.miniOrdersPanel__list}>
        {items.length === 0 ? (
          <p>آیتمی موجود نیست</p>
        ) : (
          items.map((item) => (
            <li className={styles.miniOrdersPanel__item} key={item.orderId}>
              <img
                className={styles.miniOrdersPanel_image}
                src="/pics/laptop.png"
              />{" "}
              <span className={styles.miniOrdersPanel__itemTitle}>
                {item.name} - {currencyFormat(item.price)}
              </span>
              <AiOutlineClose onClick={() => deleteItem(item)} />
            </li>
          ))
        )}
      </ul>
      <li className={styles.miniOrdersPanel__paymentSection}>
        <span>
          جمع کل:
          <span className={styles.miniOrdersPanel__price}>
            {currencyFormat(totalPrice)}
          </span>
          تومان
        </span>
        <button className={styles.miniOrdersPanel__buyBtn}>
          نهایی سازی
          <BsArrowLeft className="arrowIcon" />
        </button>
      </li>
    </ul>
  );
}

export default MiniOrderPanel;
