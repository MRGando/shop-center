import styles from '/styles/Header.module.css'
import { BiCategoryAlt, BiStoreAlt, BiHomeAlt } from "react-icons/bi";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi";
import { useContext } from 'react';
import { context } from '../Context';
import MiniOrderPanel from './MiniOrderPanel';
import CategoryList from "../partials/CategoryList";
import Link from 'next/link';
function Bottom_menu() {
    const { showOrder, setShowOrder, setShowAuth, setShowCats, showCats } = useContext(context)


    return (
        <>
            <MiniOrderPanel />
            <CategoryList />
            <ul className={styles.down_menu} >
                <li onClick={() => setShowCats(!showCats)} className={styles.down_menu__item}>
                    <BiCategoryAlt className={styles.down_menu__icon} />
                    <span>دسته بندی</span>
                </li>
                <Link href={"/shop"}> <li className={styles.down_menu__item}>
                    <BiStoreAlt className={styles.down_menu__icon} />
                    <span>فروشگاه</span>
                </li></Link>
                <li className={styles.down_menu__item} onClick={() => { setShowOrder(!showOrder); }}>
                    <HiOutlineShoppingBag className={styles.down_menu__icon} />
                    <span>سبد خرید</span>
                </li>
                <li onClick={() => setShowAuth(true)} className={styles.down_menu__item}>
                    <HiOutlineUserCircle className={styles.down_menu__icon} />
                    <span>داشبورد</span>
                </li>
                <Link href={"/"}>
                    <li className={styles.down_menu__item}>
                        <BiHomeAlt className={styles.down_menu__icon} />
                        <span>خانه</span>
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default Bottom_menu