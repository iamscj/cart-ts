import { Grid, Box } from "@mui/material";
import { StoreItem } from "../components/StoreItem";
import items from "../data/items.json";

export const Store = () => {
  return (
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
  );
};
