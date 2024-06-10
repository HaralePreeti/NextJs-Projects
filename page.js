import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>My First Next.JS App</h1>
      </main>
      <h2 className={styles.heading}>Daily Essentials</h2>
      <div className={styles.boxs}>
        <div className={styles.container}>
          <img src="https://m.media-amazon.com/images/G/31/img21/Watches2024/May/SS24/Halos/W/Luxury_brands._SS400_QL85_FMpng_.png"></img>
          <Product name="Sugar" rating="6,278" kg="1kg" price="Rs.80" />
        </div>

        <div className={styles.container}>
          <Product name="Tata Salt" rating="10,574" kg="1kg" price="Rs.106" />
        </div>

        <div className={styles.container}>
          <Product name="Fortune Sunlite" rating="34,085" kg="1kg" price="Rs.138" />
        </div>

        <div className={styles.container}>
          <Product name="Carnival" rating="8,574" kg="1kg" price="Rs.830" />
        </div>
      </div>


      <h2 className={styles.heading}>Pulses</h2>
      <div className={styles.boxs}>
        <div className={styles.container}>
          <Product name="Masoor Dal" rating="322" kg="1kg" price="Rs.210" />
        </div>

        <div className={styles.container}>
          <Product name="Tata Sampann" rating="4,378" kg="1kg" price="Rs.265" />
        </div>

        <div className={styles.container}>
          <Product name="Panchrangi Dal" rating="886" kg="1kg" price="Rs.245" />
        </div>

        <div className={styles.container}>
          <Product name="Rajdhani Pulses" rating="18" kg="1kg" price="Rs.96" />
        </div>
      </div>


      <h2 className={styles.heading}>Candy Pulse</h2>
      <div className={styles.boxs}>
        <div className={styles.container}>
          <Products name="Alpenliebe" rating="443" price="Rs.105" />
        </div>

        <div className={styles.container}>
          <Products name="Center Fruit" rating="531" price="Rs.48" />
        </div>

        <div className={styles.container}>
          <Products name="Fox's Crystal" rating="1,021" price="Rs.210" />
        </div>

        <div className={styles.container}>
          <Products name="Paan Pass" rating="9" price="Rs.130" />
        </div>
      </div>

    </>


  );
}

const Product = (props) => {
  return (
    <div>
      <h3><u>Product</u><br></br> {props.name} <br></br>Rating- {props.rating}<br></br> Kilo gram- {props.kg}
        <br></br> Price- {props.price}</h3>
    </div>
  )
}

const Products = (props) => {
  return (
    <div>
      <h3><u>Products</u><br></br> {props.name} <br></br>Rating- {props.rating} <br></br> Price- {props.price}</h3>
    </div>
  )
}
