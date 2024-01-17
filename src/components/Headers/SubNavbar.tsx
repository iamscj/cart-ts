import { Divider, Stack } from "@mui/material";
import RatingSort from "../Sort/RatingSort";
import PriceSort from "../Sort/PriceSort";
import SearchFilter from "../SearchFilter";
const SubNavbar = () => {
  const subNavItems = [<PriceSort />, <RatingSort />];
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
      flexWrap="wrap"
      sx={{ marginTop: "1rem" }}
    >
      {subNavItems.map((subNavItem, index) => (
        <div key={index}>{subNavItem}</div>
      ))}
      <SearchFilter />
    </Stack>
  );
};

export default SubNavbar;
