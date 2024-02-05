import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Card from "./Card";
export default function Tabs1() {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search button clicked");
  };
  const CardData = [
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ];

  return (
    <div>
      <Box pt={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} md={6}>
            <Typography variant="h6"> Most Popular </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Skill Courses"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
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
          <Grid container spacing={3}>
            {CardData.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
