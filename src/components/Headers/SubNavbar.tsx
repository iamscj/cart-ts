import { Divider, Stack } from "@mui/material";
import RatingSort from "../Sort/RatingSort";
import PriceSort from "../Sort/PriceSort";
const SubNavbar = () => {
  const subNavItems = [<PriceSort />, <RatingSort />];
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      flexWrap="wrap"
      sx={{ marginTop: "1rem" }}
    >
      {subNavItems.map((subNavItem, index) => (
        <div key={index}>{subNavItem}</div>
      ))}
    </Stack>
  );
};

export default SubNavbar;
