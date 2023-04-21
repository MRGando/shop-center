import styles from '/styles/Home.module.css'
import SectionOne from '@/components/Sections/SectionOne'
import SectionTwo from '../components/Sections/SectionTwo'

//SSR function
export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://fitdesign.ir/FakeShopApi/AllItems");
    const data = await res.json();
    return {
      props: { data }
    }
  } catch (err) {
    console.log(err);
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.main}>
      <SectionOne />
      <SectionTwo data={data} />
    </div>
  )
}
