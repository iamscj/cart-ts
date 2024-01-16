import { Card, CardMedia, Button, Box, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarRateIcon from "@mui/icons-material/StarRate";
import { formatCurrency } from "../utils/formatCurrenct";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addItem, removeItemByOne } from "../redux/slices/item";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
};

export const StoreItem = ({
  id,
  name,
  price,
  rating,
  categories,
  imgUrl,
}: StoreItemProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const items = useAppSelector((state) => state.items);
  let quantity = items.find((i) => String(i.id) === String(id))?.quantity || 0;

  // console.log(items);
  const dispatch = useAppDispatch();
  const nextSlide = () => {
    setCurrentImage((prevImg) => (prevImg + 1) % imgUrl.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImg) => (prevImg - 1 + imgUrl.length) % imgUrl.length);
  };

  const startAutoChange = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  };

  useEffect(() => {
    let cleanupFunction: (() => void) | undefined;

    if (isHovered) {
      cleanupFunction = startAutoChange();
    }

    return cleanupFunction;
  }, [isHovered, startAutoChange]);

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 345,
        marginTop: "2rem",
        backgroundColor: "#e0e0e0",
        border: "1px solid #e0e0e0",
        boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        image={imgUrl[currentImage]}
        height="194"
        sx={{ objectFit: "cover", backgroundColor: "#e0e0e0" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          transform: "translateY(-50%)",
          left: 0,
        }}
      >
        <Button
          onClick={prevSlide}
          size="small"
          sx={{
            background: "transparent",
            "&:hover": { background: "transparent" },
          }}
        >
          <ArrowBackIcon
            fontSize="small"
            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        <Button
          onClick={nextSlide}
          size="small"
          sx={{
            background: "transparent",
            "&:hover": { background: "transparent" },
          }}
        >
          <ArrowForwardIcon
            fontSize="small"
            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
          />
        </Button>
      </Box>
      <Typography variant="h5" sx={{ textAlign: "center", marginY: "1rem" }}>
        {name}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ marginY: "0.5rem" }}
        flexWrap="wrap"
      >
        <Typography variant="h6" color="text.secondary">
          Price : {formatCurrency(price)}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ display: "inline-flex" }}
        >
          Rating : {rating}
          <StarRateIcon />
        </Typography>
      </Stack>
      {quantity === 0 ? (
        <Button
          sx={{
            margin: "auto",
            display: "block",
            color: "green",
            width: "14rem",
            "&:hover": { color: "#15be15" },
            marginBottom: "0.5rem",
            border: "1px solid green",
          }}
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
          Add To Cart
        </Button>
      ) : (
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
              sx={{
                color: "red",
                backgroundColor: "#E0E0E0",
                width: "7rem",
                border: "1px solid red", // Set the border color to green
              }}
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
              sx={{
                color: "green",
                backgroundColor: "#E0E0E0",
                width: "7rem",
                border: "1px solid green", // Set the border color to green
              }}
            />
          </Button>
        </Stack>
      )}
    </Card>
  );
};
