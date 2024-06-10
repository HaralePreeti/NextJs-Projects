'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const data = [
    {
      image: 'https://t4.ftcdn.net/jpg/07/10/09/69/360_F_710096966_K0p5fC5gpMiFfS3aGX8nudDrh7Vj5XdE.jpg',
      name: 'Biryani',
      price: 'Rs.250'
    }, 
    {
      image: 'https://www.chompslurrpburp.com/wp-content/uploads/2022/10/cover-1.jpg',
      name: 'Butter Chicken',
      price: 'Rs.300'
    }, 
    {
      image: 'https://www.mayakaimal.com/wp-content/uploads/2022/03/Tikka-Masala-Paneer-and-Peas-_Less-Peas_.jpg',
      name: 'Paneer Tikka',
      price: 'Rs.400'
    },
    {
      image: 'https://thumbs.dreamstime.com/b/masala-dosa-top-down-view-ai-generated-masala-dosa-top-down-view-299970932.jpg',
      name: 'Masala Dosa',
      price: 'Rs.150'
    }, 
    {
      image: 'https://www.shutterstock.com/image-photo/indian-dish-spicy-chick-peas-260nw-419730262.jpg',
      name: 'Chole Bhature',
      price: 'Rs.150'
    }, 
    {
      image: 'https://t3.ftcdn.net/jpg/05/28/12/52/360_F_528125286_LeqYSWJzTwI2O6eykD5dOfWReC7QVODe.jpg',
      name: 'Rogan Josh',
      price: 'Rs.300'
    }, 
    {
      image: 'https://geekrobocook.com/wp-content/uploads/2021/02/Dhokla-Gujarati-Dish.jpg',
      name: 'Dhokla',
      price: 'RS.250'
    }, 
    {
      image: 'https://t4.ftcdn.net/jpg/07/15/96/77/360_F_715967724_YjXjjb9FA0A6enpEWnNnoKxZ4u7Iz7qF.jpg',
      name: 'Samosa',
      price: 'Rs.50'
    },
    {
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/palak-paneer.jpg',
      name: 'Palak Paneer',
      price: 'Rs.100'
    }, 
    {
      image: 'https://www.shutterstock.com/shutterstock/photos/2076945667/display_1500/stock-photo-panipuri-or-fuchka-fhuchka-or-gupchup-or-golgappa-or-pani-ke-patake-is-a-type-of-snack-that-2076945667.jpg',
      name: 'Pani Puri',
      price: 'Rs.100'
    },
    {
      image:'https://www.shutterstock.com/image-photo/chicken-vindaloo-spinach-black-bowl-260nw-1933658450.jpg',
      name:'Vindaloo',
      price:'Rs.170'
    },
    {
      image:'https://myfoodstory.com/wp-content/uploads/2022/02/Jesses-Rasam-Recipe-Tomato-Rasam-1.jpg',
      name:'Rasam',
      price:'Rs.350'
    }
  ]

  const itemPerPage=4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length/itemPerPage)
  const currentPageData = data.slice((currentPage-1)* itemPerPage, currentPage * itemPerPage)

  const goToPage=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  const goBack=()=>{
    if (currentPage==1){
      setCurrentPage(totalPages)
    } else {
      setCurrentPage(currentPage=>currentPage-1)
    }
  }

  const goNext=()=>{
    if (currentPage==totalPages){
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage =>currentPage+1)
    }
  }
  return (
    <>
      <div className={styles.title}>
        <h1>Order Your Fovourite Dish</h1>
      </div>

      <div className={styles.cart}>
        {
          currentPageData.map((item, index) => {
            return (
              <div className={styles.box}>
                <img src={item.image}></img>
                <p>{item.name}</p>

                <h4>{item.price}</h4>
                <button>Add To Cart</button>
              </div>
            )
          })
        }
      </div>

      <div className={styles.actions}>
        <button onClick={()=>goBack()} className={styles.btn}>&lt;&lt;</button>
        {
          Array.from({ length: totalPages }, (a, i) => i + 1).map((page) => {
            return (
              <button className={page === currentPage ? styles.selected : styles.btn}
                onClick={() => goToPage(page)}>{page}
              </button>
            )
          })
        }
        <button onClick={() => goNext()} className={styles.btn}>&gt;&gt;</button>
      </div>
    </>
  );
}
