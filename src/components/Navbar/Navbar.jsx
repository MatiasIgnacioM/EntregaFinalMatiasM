import { db } from "../../firebaseConfig";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import{getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from "react";

export const Navbar = () => {

  const[categories,setCategories] = useState([])

  useEffect(()=>{
    const categoriesCollection = collection(db,"categories")
    getDocs(categoriesCollection).then(res =>{
      let categoriesResult = res.docs.map(category =>{
        return{
          ...category.data(),
          id: category.id
        }
      })
      setCategories(categoriesResult)
    }).catch(err => console.log(err))
  },[])


  return (
    <div>
      <div className={styles.containerNavbar}>
      <Link to="/">
      <img src="https://res.cloudinary.com/dycvoszjn/image/upload/v1680287551/descarga_wf1sph.png" alt="Logo MonosChinos" />
      </Link> 
        

        <div className={styles.containerNavbar}>
          {categories.map((category) =>{
            return(
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

