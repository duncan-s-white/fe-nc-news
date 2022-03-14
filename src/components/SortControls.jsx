import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { sortByText } from "../utils/format";

const SortControls = ({ order, sortBy, setSortBy, setOrder }) => {
  const sortByOptions = [
    ["Date", "created_at"],
    ["Votes", "votes"],
    ["Comments", "comment_count"],
    ["Topic", "topic"],
    ["Title", "title"],
    ["Author", "author"],
  ];
  const defaultOrderOptions = [
    ["Newest", "desc"],
    ["Oldest", "asc"],
  ];
  const [orderOptions, setOrderOptions] = useState(defaultOrderOptions);

  useEffect(() => {
    setOrderOptions(sortByText(sortBy));
  }, [sortBy]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          autoWidth
          label="Sort By"
        >
          {sortByOptions.map((option) => {
            return (
              <MenuItem key={option[1]} value={option[1]}>
                {option[0]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel>Order</InputLabel>
        <Select
          value={order}
          onChange={(event) => {
            setOrder(event.target.value);
          }}
          autoWidth
          label="Order"
        >
          {orderOptions.map((option) => {
            return (
              <MenuItem key={option[1]} value={option[1]}>
                {option[0]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SortControls;
