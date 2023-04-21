import { currencyFormat } from "@/public/js/functions";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { context } from "../Context";
import styles from "/styles/Header.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";

function OrdersPanel() {
  const { items, setItems, totalPrice, setTotalPrice, ordersPanelRef, setShowOrder } =
    useContext(context);

  function deleteItem(singleItem) {
    const filterd = items.filter((item) => item.orderId !== singleItem.orderId);
    setItems(filterd);
    setTotalPrice(totalPrice - singleItem.price);
  }

  return (
      <ul
        ref={ordersPanelRef}
        className={styles.Header__ordersPanel}
        id="ordersPanel">
        <li>
          <span className={styles.Header__orderPanelTitle}>
            <HiOutlineShoppingBag />
          </span>
          <span>{items.length} آیتم</span>
        </li>
        <ul>
          {items.length === 0 ? (
            <p>آیتمی موجود نیست</p>
          ) : (
            items.map((item) => (
              <li key={item.orderId}>
                <img className={styles.orderPanel_image} src="/pics/laptop.png" />{" "}
                <span className={styles.Header__ordersPanel__itemTitle}>
                  {item.name} - {currencyFormat(item.price)}
                </span>
                <AiOutlineClose onClick={() => deleteItem(item)} />
              </li>
            ))
          )}
        </ul>
        <li>
          <span>
            جمع کل:
            <span className={styles.Header__ordersPanel__price}>
              {currencyFormat(totalPrice)}
            </span>
            تومان
          </span>
        </li>
        <button className={styles.Header__ordersPanel__buyBtn}>
          نهایی سازی
          <BsArrowLeft className="arrowIcon" />
        </button>
      </ul>
  );
}

export default OrdersPanel;
