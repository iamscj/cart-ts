import { Button } from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useAppDispatch } from "../../redux/hooks";
import { sortByPrice } from "../../redux/slices/storeItem";

const PriceSort = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(sortByPrice());
  }

  return (
    <Button
      sx={{
        width: "17rem",
        height: "2rem",
        p: 0,
        color: "black",
      }}
      onClick={handleClick}
    >
      <FilterListRoundedIcon
        sx={{ color: "black", fontSize: "2rem", marginX: "1rem" }}
      />
      Sort By Price
    </Button>
  );
};

export default PriceSort;
