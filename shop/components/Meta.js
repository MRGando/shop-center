import Head from "next/head";
function Meta({ title, keywords, desc }) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Reza Kamali" />
      <meta name="description" content={desc} />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="Theme-color" content="#901a00" />
      <link rel="icon" type="image/x-icon" href="/pics/Icon.png" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "مرکز خرید - فروش انواع لوازم الکترونیکی",
  keywords: "shop, electronic, store, shopping, center",
  desc: "Online electronic products shop center",
};

export default Meta;
