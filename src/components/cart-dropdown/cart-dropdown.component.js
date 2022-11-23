import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdownContainer,EmptyMessage,CartItems } from "./cart-dropdown.styles.js";

const CartDropdown = () => {

  const goToCheckoutHandler = ()=>{
    navigate('/checkout')
  }

  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map((item)=>(
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;