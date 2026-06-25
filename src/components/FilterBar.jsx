import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function FilterBar({ filter, setFilter }) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>Filter Type</InputLabel>

      <Select
        value={filter}
        label="Filter Type"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;