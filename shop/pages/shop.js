import styles from "../styles/Shop.module.css";
import List from "@/components/partials/List";
import Shop_landing from "@/components/partials/Shop_landing";
import Meta from "@/components/Meta";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://fitdesign.ir/FakeShopApi/AllItems");
    const datas = await res.json();

    return {
      props: { data: datas },
    };
  } catch (err) {
    console.log("Error in getStaticProps _ shop component", err);
  }
};

export default function shop({ data }) {
  function filterItems(keyword, passedData) {
    let filtered = passedData.filter(
      (item, index) => passedData[index].cat === keyword
    );
    return filtered;
  }
  return (
    <>
      <Meta
        title={"مرکز خرید | فروشگاه"}
        keywords={"فروشگاه, خرید, لوازم الکترونیک"}
        desc={"فروش انواع لوازم الکترونیک در ایران | فروشگاه مرکز خرید"}
      />
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.main__container}>
            <Shop_landing />
            <List
              title={"لپتاپ"}
              items={filterItems("laptop", data)}
              whiteTitle={true}
            />
            <List
              title={"گوشی موبایل"}
              items={filterItems("phone", data)}
              whiteTitle={true}
            />
            <List
              title={"هندزفری"}
              items={filterItems("phone", data)}
              whiteTitle={true}
            />
            <List
              title={"مانیتور"}
              items={filterItems("phone", data)}
              whiteTitle={true}
            />
            <List
              title={"موس و کیبورد"}
              items={filterItems("phone", data)}
              whiteTitle={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
