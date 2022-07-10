import { useContext } from "react";

import classes from "./ArtItem.module.css";
import ArtItemForm from "./ArtItemForm";
import CartContext from "../../../store/cart-context";

const ArtItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.art}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ArtItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default ArtItem;
