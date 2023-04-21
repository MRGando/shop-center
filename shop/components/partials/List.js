import styles from "../../styles/Home.module.css";
import Item from "./Item";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useRef } from "react";

function List({ title, items, whiteTitle }) {
    const rightRef = useRef()
    const listRef = useRef()
    const scrollLeft = () => {
        const listWidth = listRef.current.scrollWidth / listRef.current.childElementCount;
        listRef.current.scrollBy({
            left: -listWidth,
            behavior: 'smooth'
        })
    }
    const scrollRight = () => {
        const listWidth = listRef.current.scrollWidth / listRef.current.childElementCount;
        listRef.current.scrollBy({
            left: listWidth,
            behavior: 'smooth'
        })
    }
    return (
        <div className={styles.sectionTwo__row}>
            <span className={styles.sectionTwo__row__groupTitle} id={whiteTitle ? "titleColor" : null}>
                {title}
            </span>

            <MdOutlineArrowForwardIos onClick={scrollRight} ref={rightRef} className={styles.sectionTwo__row__scrollBtn} id="scroll_right" />
            <ul ref={listRef} className={styles.sectionTwo__list}>
                {items.map((each, index) => (<Item key={index} values={each} />))}
            </ul>
            <MdOutlineArrowBackIosNew onClick={scrollLeft} className={styles.sectionTwo__row__scrollBtn} id="scroll_left" />
            <style jsx>
                {`
        #titleColor{
            color: white;
        }
        `}
            </style>
        </div>

    )
}

List.defaultProps = {
    title: 'لپتاپ های پر فروش',
    whiteTitle: false,
}

export default List