import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsColFil = query(itemCollection, where("category", "==", categoryName));
      consulta = itemsColFil;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => ({
          ...product.data(),
          id: product.id
        }));

        setItems(products);
      })
      .catch(err => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer;