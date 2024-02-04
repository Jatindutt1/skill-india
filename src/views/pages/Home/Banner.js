import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Tabs1 from "./Tabs1";
import Tab2 from "./Tab2";
import SliderSection from "./SliderSection";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    backgroundColor: "#fff",
    mixBlendMode: "normal",
    boxShadow: "0 0 20px #042cb00d",
    borderRadius: "10px",
    position: "relative",
    padding: "30px",
    marginTop:"-80px",
  },
  mainBox: {
    display: "flex",
    overflowX: "scroll",
    paddingBottom: "10px"
  },
  TabsButton: {
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
    "& h3": {
      color: "#666666",
      fontWeight: "300",
      fontSize: "22px"
    },
    "& h2": {
      color: "#042cb0",
    },
  },
  TabsButtonActive: {
    background: "#F9F9F9",
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
export default function Banner() {
  const classes = useStyles();
  const [tabs, setTabs] = useState("1");
  return (
    <Box>
      <SliderSection />
      <Container>
        <Box className={classes.mainPaper}>
        <ScrollAnimation animateIn="fadeInUp">
          <Box className={classes.mainBox}>
            <Box
              className={
                tabs === "1" ? classes.TabsButtonActive : classes.TabsButton
              }
              onClick={() => setTabs("1")}
            >
              <Box width="100px">
                <Typography variant="h3"> Skill Courses </Typography>
              </Box>
              <Box>
                <Typography variant="h2">527+</Typography>
              </Box>
            </Box>
            <Box
              className={
                tabs === "2" ? classes.TabsButtonActive : classes.TabsButton
              }
              onClick={() => setTabs("2")}
            >
              <Box width="100px">
                <Typography variant="h3"> Job Exchange </Typography>
              </Box>
              <Box>
                <Typography variant="h2">1502+</Typography>
              </Box>
            </Box>
            <Box
              className={
                tabs === "3" ? classes.TabsButtonActive : classes.TabsButton
              }
              onClick={() => setTabs("3")}
            >
              <Box width="100px">
                <Typography variant="h3"> Skill Centre </Typography>
              </Box>
              <Box>
                <Typography variant="h2">42645+</Typography>
              </Box>
            </Box>
          </Box>
          {
            tabs === "1" && <Tab2 />
          }
          {
            tabs === "2" && <Tabs1 />
          }
          {
            tabs === "3" && <Tabs1 />
          }
          </ScrollAnimation>
        </Box>
      </Container>
    </Box>
  );
}
