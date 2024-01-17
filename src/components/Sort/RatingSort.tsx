import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { sortByRating } from "../../redux/slices/storeItem";
import React, { useState } from "react";

const RatingSort = () => {
  const storeItems = useAppSelector((state) => state.storeItems);
  const dispatch = useAppDispatch();

  function handleClick(type: string) {
    dispatch(sortByRating(type));
  }

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        sx={{
          width: "12rem",
          height: "2rem",
          p: 0,
          color: "black",
        }}
        onClick={handlePopOver}
      >
        <FilterListRoundedIcon
          sx={{ color: "black", fontSize: "2rem", marginX: "1rem" }}
        />
        Sort By Rating
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopOverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <>
          <Button
            sx={{
              width: "12rem",
              height: "2rem",
              p: 0,
              color: "black",
            }}
            onClick={() => handleClick("priceAndRating")}
          >
            Consider Price
          </Button>
          <br />
          <Button
            sx={{
              width: "12rem",
              height: "2rem",
              p: 0,
              color: "black",
            }}
            onClick={() => handleClick("rating")}
          >
            Only By Rating
          </Button>
        </>
      </Popover>
    </div>
  );
};

export default RatingSort;
