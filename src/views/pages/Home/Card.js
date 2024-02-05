import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { FaCalendarDay } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

const useStyles = makeStyles(() => ({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    position: "relative",
    boxShadow: "0 0 20px #d1d1d14d",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    cursor: "pointer",
    transition: "all 0.5s",
    "& img": {
      transition: "transform 0.3s ease-in-out",
    },
    "&:hover": {
      boxShadow: "0 0 20px 2px #cccccc",
      "& img": {
        transform: "scale(1.2)",
      },
    },
  },
  imageContainer: {
    borderRadius: "20px",
    overflow: "hidden",
  },
  calendarIcon: {
    color: "#666666",
  },
  detailsContainer: {
    display: "flex",
    alignItems: "center",
  },
  viewDetailsText: {
    fontWeight: "600",
  },
  arrowIcon: {
    color: "#11111",
    fontSize: "18px",
  },
}));

export default function Card() {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.imageContainer}>
        <img
          src="./images/skill1.jpg"
          alt=""
          width="100%"
          height="150px"
        />
      </Box>
      <Box pt={2}>
        <Typography style={{ color: "#333333" }} variant="h4">
          IIT Jodhpur, AU Small Finance Bank collaborates to drive innovation, education
        </Typography>
      </Box>
      <Box pt={1} style={{ display: "flex" }}>
        <FaCalendarDay className={classes.calendarIcon} />
        <Box ml={1}>
          <Typography variant="h6" style={{ color: "#666666" }}> 03-02-2024 </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body1" style={{ color: "#666666" }}>
          ...graduates face many difficulties after graduation to enrol in the
          workforce. Recent graduates are lacking knowledge, practical skills,
          and experience which are mandatory requirements demanded by employers
          for recruitment, it says. As per the India Skill...
        </Typography>
      </Box>
      <Box my={1} className={classes.detailsContainer}>
        <Box>
          <Typography variant="body2" className={classes.viewDetailsText}> View Details </Typography>
        </Box>
        <Box ml={1} mt={0.5}>
          <RiArrowRightLine className={classes.arrowIcon} />
        </Box>
      </Box>
    </Box>
  );
}
