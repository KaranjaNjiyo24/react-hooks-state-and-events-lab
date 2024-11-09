import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleItemInCart() {
    setIsInCart((isInCart) => !isInCart)
  }

  // const "" = isInCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={isInCart ? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItemInCart}>
         {isInCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
