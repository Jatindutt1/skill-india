import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { RiArrowRightLine } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  courseCard: {
    backgroundPosition: 'center !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: "450px !important",
    padding: "15px",
    margin: "0px 15px",
    borderRadius: "10px",
    position: "relative",
    boxShadow: "0 4px 20px #d1d1d14d",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      boxShadow: "0 16px 45px #d1d1d14d",
      backgroundSize: "550px !important",
    },
    "&:before": {
      content: '""',
      background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,#000000 100%)',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      borderRadius: '10px'
    }
  },
  clipPath: {
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "10px",
    padding: "11px 20px",
    position: "absolute",
    top: "0",
    right: "0",
    background: "#042CB0",
    borderRadius: "0 10px",
  },
}));

export default function CourseCard({ course }) {
  const classes = useStyles();

  return (
    <Box style={{ background: 'url("./images/cardimg1.jpg")' }} className={classes.courseCard}>
      <Box className={classes.clipPath}>
        <Typography variant="body2">{course?.status}</Typography>
      </Box>
      <Box className="card-index-show">
        <Box>
          <Typography variant="h6">{course?.title}</Typography>
        </Box>
        <Box my={1} style={{ display: "flex" }}>
          <Box>
            <AiFillClockCircle style={{ color: "#fff", fontSize: "18px" }} />
          </Box>
          <Box ml={1}>
            <Typography variant="body1">{course?.time} Hours</Typography>
          </Box>
        </Box>
        <Box my={1} style={{ display: "flex" }}>
          <Box>
            <BsFillPeopleFill style={{ color: "#fff", fontSize: "18px" }} />
          </Box>
          <Box ml={1}>
            <Typography variant="body1">{course?.student} Students</Typography>
          </Box>
        </Box>
        <Box mt={2} mb={1} style={{ display: "flex" }}>
          <Box className="rating-style">
            <Rating name="read-only" value={course?.rateno} readOnly />
          </Box>
          <Box ml={1}>
            <Typography variant="body1">{course?.users} users</Typography>
          </Box>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="body2" style={{ fontWeight: "600" }}>
              Go To Course
            </Typography>
          </Box>
          <Box ml={1} mt={0.5}>
            <RiArrowRightLine style={{ color: "#df6e12", fontSize: "25px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
