import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import CartItem from "./CartItem";
import { Button, Typography } from "@mui/material";
import { formatCurrency } from "../utils/formatCurrenct";

const Cart = () => {
  const items = useAppSelector((state) => state.items);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    setTotalAmount(total);
  }, [items]);

  return (
    <div>
      <Typography
        variant="h6"
        textAlign="center"
        mt="1rem"
        marginX="1rem"
        sx={{
          background: "#e0e0e0",
          boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Cart
      </Typography>
      {items.length > 0 &&
        items.map((item, index) => <CartItem {...item} key={item.id} />)}
      {items.length > 0 ? (
        <>
          <Typography
            variant="h6"
            textAlign="center"
            marginTop="2rem"
            color="text.secondary"
            marginX="1rem"
          >
            Total Amount : {formatCurrency(totalAmount)}
          </Typography>
          <Button
            sx={{
              background: "#e0e0e0",
              display: "block",
              margin: "auto",
              color: "black",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Proceed
          </Button>
        </>
      ) : (
        <Typography
          variant="h6"
          textAlign="center"
          mt="1rem"
          color="text.secondary"
          marginX="1rem"
        >
          No Items in the Cart
        </Typography>
      )}
    </div>
  );
};

export default Cart;
