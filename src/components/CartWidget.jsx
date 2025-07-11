import '../styles/CartWidget.css'
import { RiShoppingBag2Line } from "react-icons/ri";

const CartWidget = () => {
  return(
    <div className="cart-icon">
        <RiShoppingBag2Line />
        <span className="cart-count">4</span>
      </div>
  )
}

export default CartWidget