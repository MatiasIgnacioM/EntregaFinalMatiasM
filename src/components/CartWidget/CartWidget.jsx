import { useContext } from "react";
import "../CartWidget/CartWidget.css";
import { HiShoppingCart } from "react-icons/hi"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";






const  CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext)

  let total = getTotalQuantity()

  return(
    <Link to="/Cart">
      <div className="container-cart">
        <HiShoppingCart
          style={{
            fontSize: "2rem",
            color: 'red',
          }}
          />
          <div className="bubble-counter">
            <span>{total}</span>
          </div>
      </div>
    </Link>
  );
};

export default CartWidget;


