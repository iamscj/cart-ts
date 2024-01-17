import { Grid, Box } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import itemsStatic from "../data/items.json";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { sortByPrice } from "../redux/slices/storeItem";
import { useEffect, useState } from "react";
import SubNavbar from "../components/Headers/SubNavbar";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
};

export const Store = () => {
  const storeItems = useAppSelector((state) => state.storeItems);
  const dispatch = useAppDispatch();

  const [items, setItems] = useState<StoreItemProps[]>(itemsStatic);

  useEffect(() => {
    setItems(storeItems);
  }, [storeItems]);

  return (
    <>
      <SubNavbar />
      <Box
        sx={{
          maxWidth: "90%",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
