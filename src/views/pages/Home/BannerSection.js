import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TabsComponent1 from "./TabsComponent1";
import TabComponent2 from "./TabComponent2";
import SliderComponent from "./SliderComponent";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#fff",
    mixBlendMode: "normal",
    boxShadow: "0 0 20px #042cb00d",
    borderRadius: "10px",
    position: "relative",
    padding: "30px",
    marginTop:"-80px",
    [theme.breakpoints.down("sm")]:{
      padding: "10px",

    },
  },
  mainFlexBox: {
    display: "flex",
    overflowX: "scroll",
    paddingBottom: "10px"
  },
  tabButton: {
    background: "#F9F9F9",
    borderRadius: "10px",
    margin: "5px",
    padding: "13px 20px",
    opacity: "1",
    minWidth: "305px",
    width: "100%",
    cursor: "pointer",
    minHeight: "85px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    border: "1px solid #CCCCCC",
    alignItems: "center",
    [theme.breakpoints.down("sm")]:{
      minWidth: "220px",
    },
    "& h3": {
      color: "#666666",
      fontWeight: "300",
      fontSize: "22px"
    },
    "& h2": {
      color: "#042cb0",
    },
  },
  tabButtonActive: {
    borderRadius: "10px",
    margin: "5px",
    padding: "13px 20px",
    opacity: "1",
    cursor: "pointer",
    minWidth: "305px",
    width: "100%",
    maxHeight: "85px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    border: "1px solid #CCCCCC",
    background: "#FDF2E9",
    borderBottom: "4px solid #DF6E12",
    position: "relative",
    [theme.breakpoints.down("sm")]:{
      minWidth: "220px",
    },
    "& h3": {
      fontSize: "22px",
      fontWeight: "600"
    },
    "& h2": {
      color: "#042cb0",
      fontWeight: "700",
    },
    "&:before": {
      "top": "102%",
      "left": "48%",
      "width": "20px",
      "height": "11px",
      "content": "\"\"",
      "position": "absolute",
      "clipPath": "polygon(50% 0%, 0% 100%, 100% 100%)",
      "transform": "rotate(180deg)",
      "background": "#DF6E12"
    }
  },
}));

export default function CustomBannerSection() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Box>
      <SliderComponent />
      <Container>
        <Box className={classes.mainContainer}>
          <ScrollAnimation animateIn="fadeInUp">
            <Box className={classes.mainFlexBox}>
              <Box
                className={
                  activeTab === "tab1" ? classes.tabButtonActive : classes.tabButton
                }
                onClick={() => setActiveTab("tab1")}
              >
                <Box width="100px">
                  <Typography variant="h3"> Custom Courses </Typography>
                </Box>
                <Box>
                  <Typography variant="h2">527+</Typography>
                </Box>
              </Box>
              <Box
                className={
                  activeTab === "tab2" ? classes.tabButtonActive : classes.tabButton
                }
                onClick={() => setActiveTab("tab2")}
              >
                <Box width="100px">
                  <Typography variant="h3"> Job Market </Typography>
                </Box>
                <Box>
                  <Typography variant="h2">1502+</Typography>
                </Box>
              </Box>
              <Box
                className={
                  activeTab === "tab3" ? classes.tabButtonActive : classes.tabButton
                }
                onClick={() => setActiveTab("tab3")}
              >
                <Box width="100px">
                  <Typography variant="h3"> Learning Hub </Typography>
                </Box>
                <Box>
                  <Typography variant="h2">42645+</Typography>
                </Box>
              </Box>
            </Box>
            {activeTab === "tab1" && <TabComponent2 />}
            {activeTab === "tab2" && <TabsComponent1 />}
            {activeTab === "tab3" && <TabsComponent1 />}
          </ScrollAnimation>
        </Box>
      </Container>
    </Box>
  );
}
