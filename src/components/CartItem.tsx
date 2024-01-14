import { Card, CardMedia, Button, Box, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { formatCurrency } from "../utils/formatCurrenct";
import { useAppDispatch } from "../redux/hooks";
import { addItem, removeItem, removeItemByOne } from "../redux/slices/item";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
  quantity: number;
}

const CartItem = ({
  id,
  name,
  price,
  rating,
  categories,
  imgUrl,
  quantity,
}: CartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 250,
        minWidth: 250,
        marginTop: "2rem",
        backgroundColor: "#e0e0e0",
      }}
    >
      <CardMedia
        component="img"
        image={imgUrl[0]}
        height="100"
        sx={{
          backgroundColor: "#e0e0e0",
          objectFit: "cover",
          width: "100%",
          height: "100",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "35%",
          transform: "translateY(-50%)",
          left: 0,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      ></Box>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", marginY: "0.5rem" }}
      >
        {name}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={() =>
            dispatch(
              removeItemByOne({
                id,
                name,
                price,
                rating,
                categories,
                imgUrl,
              })
            )
          }
        >
          <RemoveIcon
            sx={{ color: "white", backgroundColor: "red", width: "4rem" }}
          />
        </Button>

        <Typography variant="h6" sx={{ marginX: "0.4rem" }}>
          {quantity}
        </Typography>
        <Button
          onClick={() =>
            dispatch(
              addItem({
                id,
                name,
                price,
                rating,
                categories,
                imgUrl,
              })
            )
          }
        >
          <AddIcon
            sx={{ color: "white", backgroundColor: "green", width: "4rem" }}
          />
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ marginY: "0.5rem" }}
        flexWrap="wrap"
      >
        <Typography variant="subtitle1" color="text.secondary">
          Price : {formatCurrency(price)}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ marginY: "0.5rem" }}
        flexWrap="wrap"
      >
        <Typography variant="subtitle1" color="text.secondary">
          TotalPrice : {formatCurrency(price * quantity)}
        </Typography>
      </Stack>
      <Button
        onClick={() => {
          dispatch(
            removeItem({
              id,
              name,
              price,
              rating,
              categories,
              imgUrl,
            })
          );
        }}
        sx={{ color: "red", display: "block", margin: "auto" }}
      >
        Remove Item
      </Button>
    </Card>
  );
};

export default CartItem;