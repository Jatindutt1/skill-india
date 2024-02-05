import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CustomCard from "./CustomCard";

export default function SkillCoursesSection() {
  const courseData = [
    { name: "Course 1" },
    { name: "Course 2" },
    { name: "Course 3" },
    { name: "Course 4" },
  ];

  return (
    <Box pt={2}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={6}>
          <Typography variant="h6"> Most Popular Courses </Typography>
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
          {courseData.map((course, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <CustomCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
