import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { maincardData } from "src/component/dummyJson";
import Slider from "react-slick";
import CourseCard from "./CourseCard";

export default function PopularCoursesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseStatus, setCourseStatus] = useState("All");

  const handleStatusChange = (event) => {
    setCourseStatus(event.target.value);
  };

  const filteredDataBySearch = maincardData.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDataByStatus =
    courseStatus !== "All"
      ? maincardData.filter((course) =>
          course.status.toLowerCase().includes(courseStatus.toLowerCase())
        )
      : maincardData;

  const displayedData =
    searchQuery !== ""
      ? filteredDataBySearch
      : courseStatus !== "All"
      ? filteredDataByStatus
      : maincardData;

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: Math.min(displayedData.length, 4),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Box pt={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} md={6}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6"> Most Popular </Typography>
              <FormControl variant="outlined" style={{ width: "200px" }}>
                <Select
                  value={courseStatus}
                  onChange={handleStatusChange}
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Typography variant="h6" style={{ textAlign: "center" }}>
              No data found
            </Typography>
          ) : (
            <Slider {...sliderSettings}>
              {displayedData.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </Slider>
          )}
        </Box>
      </Box>
    </div>
  );
}
