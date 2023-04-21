import List from "@/components/partials/List";
import styles from "/styles/Details.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useRef } from "react";
import { context } from "@/components/Context";
import { currencyFormat, addOrder } from "@/public/js/functions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { RiStore2Line } from "react-icons/ri";
import Meta from "@/components/Meta";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch("http://fitdesign.ir/FakeShopApi/AllItems/" + id);
  const data = await res.json();

  const res_more = await fetch("http://fitdesign.ir/FakeShopApi/AllItems");
  const data_more = await res_more.json();

  return {
    props: { item: data, more_items: data_more },
  };
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.color = "#fff";
ChartJS.defaults.borderColor = "#6d6d6d";
ChartJS.defaults.font;
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "نمودار تغییر قیمت",
    },
  },
};

const labels = [
  "شنبه",
  "یک شنبه",
  "دو شنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
];

export const data = {
  labels,
  datasets: [
    {
      label: "قیمت",
      data: [1000000, 1500000, 1300000, 900000, 1900000, 1300000, 2000000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "خرید",
      data: [500000, 200000, 800000, 1000000, 1200000, 900000, 1300000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
function details({ item, more_items }) {
  const addButtonRef = useRef(null);
  const addTextRef = useRef(null);
  const addLoadingRef = useRef(null);
  const addButton2Ref = useRef(null);
  const addText2Ref = useRef(null);
  const addLoading2Ref = useRef(null);

  const {
    items,
    setItems,
    totalPrice,
    setTotalPrice,
    photos,
    imageNumber,
    setImageNumber,
  } = useContext(context);
  const productImageRef = useRef();
  const dotsRef = useRef();

  function slide(direction) {
    if (direction === "right") {
      if (imageNumber === 0) setImageNumber(photos.length - 1);
      else setImageNumber(imageNumber - 1);
    }
    if (direction === "left") {
      if (imageNumber >= photos.length - 1) setImageNumber(0);
      else setImageNumber(imageNumber + 1);
    }
    productImageRef.current.src = `/pics/${photos[imageNumber]}`;
    for (let option in photos) {
      dotsRef.current.children[option[0]].style.backgroundColor = "transparent";
      dotsRef.current.children[option[0]].style.transform = "scale(0.8)";
    }
    dotsRef.current.children[imageNumber].style.backgroundColor = "black";
    dotsRef.current.children[imageNumber].style.transform = "scale(1.2)";
  }
  useEffect(slide);

  const addEffect = () => {
    addButtonRef.current.style.backgroundColor = "green";
    addTextRef.current.style.display = "none";
    addLoadingRef.current.style.display = "block";
    addButton2Ref.current.style.backgroundColor = "green";
    addText2Ref.current.style.display = "none";
    addLoading2Ref.current.style.display = "block";
    setTimeout(() => {
      addButtonRef.current.style.backgroundColor = "";
      addTextRef.current.style.display = "block";
      addLoadingRef.current.style.display = "none";
      addButton2Ref.current.style.backgroundColor = "";
      addText2Ref.current.style.display = "block";
      addLoading2Ref.current.style.display = "none";
    }, 1000);
  };
  return (
    <>
      <Meta
        keywords={"گوشی, لپتاپ, سامسونگ"}
        desc={"گوشی سامسونگ مدل mt5 نسخه 2016 گلوبال دو سیم کارته"}
      />
      <div className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__boxOne}>
            <div className={styles.main__buySection} id={"buySection"}>
              <ul className={styles.main__buySection__informations}>
                <li>
                  <HiOutlineTruck className={styles.main__buySection__SVG} />{" "}
                  ارسال رایگان شهر تهران
                </li>
                <li>
                  <RiStore2Line className={styles.main__buySection__SVG} />{" "}
                  موجود در انبار
                </li>
                <li>
                  <BsShieldCheck className={styles.main__buySection__SVG} />{" "}
                  ضمانت کیفیت محصول
                </li>
              </ul>
              <span>
                قیمت :
                <span className={styles.main__price}>
                  {currencyFormat(item[0].price)}
                </span>
                <span>تومان</span>
              </span>
              <button
                ref={addButton2Ref}
                onClick={() => {
                  addOrder(items, setItems, item[0], totalPrice, setTotalPrice);
                  addEffect();
                }}
                className={styles.main__buyBtn}>
                <p ref={addText2Ref}>
                  افزودن <FiShoppingCart />
                </p>
                <span
                  className={styles.loadingIndicatorContainer}
                  ref={addLoading2Ref}>
                  <AiOutlineLoading3Quarters
                    className={styles.loadingIndicator}
                  />
                </span>
              </button>
            </div>
            <div className={styles.main__boxOne__imgContainer}>
              <MdOutlineArrowForwardIos
                onClick={() => slide("left")}
                id="arrowRight"
                className={styles.main__boxOne__arrowRight}
              />

              <img
                ref={productImageRef}
                id="product_images"
                src={`/pics/${photos[0]}`}
                alt="تصویر محصول"
              />
              <div className={styles.main__imageDots} ref={dotsRef}>
                {photos.map((photo) => (
                  <div key={photo[0]}></div>
                ))}
              </div>
              <MdOutlineArrowBackIosNew
                onClick={() => slide("right")}
                id="arrowLeft"
                className={styles.main__boxOne__arrowLeft}
              />
            </div>

            <div className={styles.main__boxOne__info} id={"info"}>
              <span className={styles.main__title}>اطلاعات محصول</span>
              <ul>
                <li>
                  <span>
                    نام :{" "}
                    <span className={styles.main__name}>{item[0].name}</span>
                  </span>
                </li>
                <li>
                  <span>
                    حافظه :{" "}
                    <span className={styles.main__memory}>
                      {item[0].memory}
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    گرافیک :{" "}
                    <span className={styles.main__graphic}>
                      {item[0].graphic}
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    سی پی یو : <span className={styles.main__cpu}>Core i7</span>
                  </span>
                </li>
                <li>
                  <span>
                    جنس بدنه :{" "}
                    <span className={styles.main__texture}>پلاستیک فشرده</span>
                  </span>
                </li>
                <li>
                  <span>
                    کیبورد :{" "}
                    <span className={styles.main__keyboard}>مکانیکی</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.main__buySection__smallerScreenInfo}>
              <div className={styles.main__buySection}>
                <ul className={styles.main__buySection__informations}>
                  <li>
                    <HiOutlineTruck className={styles.main__buySection__SVG} />{" "}
                    ارسال رایگان شهر تهران
                  </li>
                  <li>
                    <RiStore2Line className={styles.main__buySection__SVG} />{" "}
                    موجود در انبار
                  </li>
                  <li>
                    <BsShieldCheck className={styles.main__buySection__SVG} />{" "}
                    ضمانت کیفیت محصول
                  </li>
                </ul>
                <span>
                  قیمت :
                  <span className={styles.main__price}>
                    {currencyFormat(item[0].price)}
                  </span>
                  <span>تومان</span>
                </span>
                <button
                  ref={addButtonRef}
                  onClick={() => {
                    addOrder(
                      items,
                      setItems,
                      item[0],
                      totalPrice,
                      setTotalPrice
                    );
                    addEffect();
                  }}
                  className={styles.main__buyBtn}>
                  <p ref={addTextRef}>
                    افزودن <FiShoppingCart />
                  </p>
                  <span
                    className={styles.loadingIndicatorContainer}
                    ref={addLoadingRef}>
                    <AiOutlineLoading3Quarters
                      className={styles.loadingIndicator}
                    />
                  </span>
                </button>
              </div>
              <div className={styles.main__boxOne__info}>
                <span className={styles.main__title}>اطلاعات محصول</span>
                <ul>
                  <li>
                    <span>
                      نام :{" "}
                      <span className={styles.main__name}>{item[0].name}</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      حافظه :{" "}
                      <span className={styles.main__memory}>
                        {item[0].memory}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span>
                      گرافیک :{" "}
                      <span className={styles.main__graphic}>
                        {item[0].graphic}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span>
                      سی پی یو :{" "}
                      <span className={styles.main__cpu}>Core i7</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      جنس بدنه :{" "}
                      <span className={styles.main__texture}>
                        پلاستیک فشرده
                      </span>
                    </span>
                  </li>
                  <li>
                    <span>
                      کیبورد :{" "}
                      <span className={styles.main__keyboard}>مکانیکی</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.main__boxTwo}>
            <span className={styles.main__title}>توضیحات</span>
            <span className={styles.main__desc}>
              لپ تاپ 14 اینچی ایسوس مدل R465FA-EB028 که با طراحی زیبا روانه‌ی
              بازار شده است. این لپ‌تاپ به‌واسطه‌ی قابلیت‌ها و امکاناتی که دارد،
              علاوه ‌بر کاربری معمول روزمره، برای کاربری مالتی‌مدیا سبک هم مناسب
              است. بدنه‌ی شیک R465FA به‌گونه‌ای طراحی شده که لپ‌تاپی رده‌بالا را
              نوید می‌دهد. این بدنه 15.9 میلی‌متر ضخامت و 1.4 کیلوگرم وزن دارد و
              برای جابه‌جایی دائمی آن مشکل خاصی نخواهید داشت. صفحه‌نمایش 14
              اینچی این محصول، پنل IPS با وضوح FHD و روکش مات است. پورت‌های
              متعدد و متنوعی از جمله 2 پورت USB 2.0 و 1 پورت USB 3.2 و پورت‌های
              HDMI، USB Type-C روی لبه‌های R465FA دیده می‌شود که با استفاده از
              آن‌ها می‌توان انواع ابزارهای جانبی را بدون نیاز به هیچ مبدلی به
              این لپ‌تاپ متصل و از آن‌ها استفاده کرد. ایسوس در کنار این امکانات
              متعدد، از سخت‌افزارهای خوبی هم در این محصول استفاده کرده است.
              پردازنده این لپ‌تاپ i3 بوده و می‌تواند تا حد معقول و نرمال و
              معمولی پردازش‌های شما را انجام دهد.
            </span>
          </div>
          <div className="chart">
            <Line options={options} data={data} />
          </div>
          <div className={styles.main__boxThree}>
            <List title={"سایر محصولات"} items={more_items} whiteTitle={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default details;
