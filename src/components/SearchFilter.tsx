import OutlinedInput from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { filterBySearch } from "../redux/slices/storeItem";
import debounce from "lodash.debounce";

const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const [searchField, setSearchField] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchField(value);
    delayedDispatch(value);
  };

  const handleSearchClick = (searchField: string) => {
    dispatch(filterBySearch(searchField));
  };

  const delayedDispatch = debounce((value: string) => {
    dispatch(filterBySearch(value));
  }, 1000);

  return (
    <>
      <OutlinedInput
        name="searchField"
        placeholder="Search Products..."
        onChange={handleSearchInputChange}
        endAdornment={
          <InputAdornment position="end">
            <Button
              onClick={() => handleSearchClick(searchField)}
              sx={{ padding: 0, margin: 0 }}
            >
              <SearchIcon sx={{ fontSize: "1.5rem", color: "black" }} />
            </Button>
          </InputAdornment>
        }
        sx={{ height: "2.5rem" }}
      />
    </>
  );
};

export default SearchFilter;
