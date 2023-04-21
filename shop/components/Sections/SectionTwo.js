import styles from "/styles/Home.module.css";
import Link from "next/link";
import List from "../partials/List";

function SectionTwo({ data }) {

  function filterItems(keyword, passedData) {
    let filtered = passedData.filter((item, index) => passedData[index].cat === keyword);
    return filtered;
  }
  // const { filterItems } = useContext(context);
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.sectionTwo__container}>
        <ul className={styles.sectionTwo__badges}>
          <Link href={"/shop"}><li>لپتاپ</li></Link>
          <Link href={"/shop"}><li>گوشی</li></Link>
          <Link href={"/shop"}><li>مانیتور</li></Link>
          <Link href={"/shop"}><li>هدفون</li></Link>
          <Link href={"/shop"}><li>هندزفری</li></Link>
          <Link href={"/shop"}><li>تبلت</li></Link>
        </ul>
        <List title={"لپتاپ های پر فروش"} items={filterItems("laptop", data)} />
        <List title={"گوشی های پر فروش"} items={filterItems("phone", data)} />
      </div>
    </div>
  );
}

export default SectionTwo;
