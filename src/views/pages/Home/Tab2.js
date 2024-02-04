import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import MainCards from "./MainCards";
import { maincardData } from "src/component/dummyJson";
import Slider from "react-slick";

export default function Tab2() {
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = React.useState('All'); // Initialize status state

  const handleChange = (event) => {
    setStatus(event.target.value); // Update status state
  };

  const filteredData = maincardData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const filterSelectData = maincardData.filter((item) =>
    item.status.toLowerCase().includes(status.toLowerCase())
  );
  const displayedData = searchInput !== "" ? filteredData : status !== "All" ? filterSelectData : maincardData;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: Math.min(displayedData.length, 4),
    slidesToScroll: 1,
  };

  return (
    <div>
      <Box pt={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} md={6}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6"> Most Popular </Typography>
              <FormControl variant="outlined" style={{ width: "200px" }}>
                <Select
                  value={status}
                  onChange={handleChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Offline">Offline</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Skill Courses"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary">
                      SEARCH
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Box pt={4}>
          {displayedData.length === 0 ? (
            <Typography variant="h6" style={{textAlign:"center"}}>No data found</Typography>
          ) : (
            <Slider {...settings}>
              {displayedData.map((item) => (
                <MainCards key={item.id} item={item} />
              ))}
            </Slider>
          )}
        </Box>
      </Box>
    </div>
  );
}
