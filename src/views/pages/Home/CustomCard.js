import React from "react";
import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    background: theme.palette.common.white,
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
    boxShadow: "0 4px 20px #d1d1d14d",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      boxShadow: "0 0 20px 2px #cccccc",
    },
  },
  clipPath: {
    fontWeight: "700",
    color: theme.palette.common.white,
    marginBottom: "10px",
    padding: "11px 20px",
    position: "absolute",
    top: "0",
    right: "0",
    background: "#042CB0",
    borderRadius: "0 10px",
  },
  iconButton: {
    background: "#F1F1F1",
  },
  icon: {
    fontSize: "18px",
    color: "#DF6E12",
  },
  locationIcon: {
    color: "#11111",
  },
  suitcaseIcon: {
    color: "#11111",
    fontSize: "12px",
  },
  rupeeIcon: {
    color: "#11111",
    fontSize: "18px",
  },
  arrowIcon: {
    color: "#11111",
    fontSize: "18px",
  },
}));

const CustomCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainCard}>
      <Box className={classes.clipPath}>
        <Typography variant="body2">Job</Typography>
      </Box>
      <Box>
        <IconButton className={classes.iconButton}>
          <IoShareSocialOutline className={classes.icon} />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Typography variant="h6"> Technician - Plant Electrical </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" style={{ fontWeight: "600" }}>
          NSDC International Limited
        </Typography>
      </Box>
      <Box my={1} style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <MdLocationOn className={classes.locationIcon} />
        </Box>
        <Box ml={1}>
          <Typography variant="body1"> United Arab Emirates </Typography>
        </Box>
      </Box>
      <Box my={1} style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <FaSuitcase className={classes.suitcaseIcon} />
        </Box>
        <Box ml={1}>
          <Typography variant="body1"> Full Time | Immediate Joiner </Typography>
        </Box>
      </Box>
      <Box my={1} style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <BiRupee className={classes.rupeeIcon} />
        </Box>
        <Box ml={1}>
          <Typography variant="h6"> 109,666 / month </Typography>
        </Box>
      </Box>
      <Box my={1} style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            View Details
          </Typography>
        </Box>
        <Box ml={1} mt={0.5}>
          <RiArrowRightLine className={classes.arrowIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
