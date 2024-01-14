import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import storeItems from "../data/items.json";

const Cart = () => {
  const items = useAppSelector((state) => state.items);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(items);
  useEffect(() => {
    console.log("hi");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      const checkPriceItem = storeItems.find(
        (it) => String(it.id) === String(items[i].id)
      );
      console.log(checkPriceItem);
      if (checkPriceItem !== undefined) {
        total += checkPriceItem.price * items[i].quantity;
      }
    }
    setTotalAmount(total);
  }, [items]);

  return <div>TotalAmount : {totalAmount}</div>;
};

export default Cart;
