import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: "#042CB0",
    position: "relative",
    paddingTop: "50px",
    marginTop: "200px",
    backgroundPosition: " bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
    // "&"
    "& h6": {
      fontWeight: "bold",
      fontSize: "16px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#fff",
    },
    "& ul": {
      paddingLeft: "0",
    },
    "& p": {
      marginBottom: "0px",
      marginTop: "10px",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  topSection: {
    padding: "30px 60px",
    margin: "0",
    display: "flex",
    alignItems: "center",
    gap: "50px",
    justifyContent: "space-between",
    borderRadius: "20px",
    background: "#FFFFFF",
    position: "absolute",
    top: "-94px",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "1",
    boxShadow: "0px 2px 5px #cccc",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
      width: "100%",
      padding: "32px 5px",
      borderRadius: "5px",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        height: "25px",
        width: "auto",
      },
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerSection}>
        <Container>
          <ScrollAnimation animateIn="bounceIn">
            <Box className={classes.topSection}>
              <img
                src="https://www.skillindiadigital.gov.in/assets/image/discovery-img/satyamev_jayatee.svg"
                alt=""
              />
              <img
                src="https://www.skillindiadigital.gov.in/assets/new-ux-img/departmentofadminitration.png"
                alt=""
              />
              <img
                src="https://www.skillindiadigital.gov.in/assets/new-ux-img/indiagovin.png"
                alt=""
              />
              <img
                src="https://www.skillindiadigital.gov.in/assets/new-ux-img/towardofnew.png"
                alt=""
              />
            </Box>
          </ScrollAnimation>
        </Container>
        <Box pt={8}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="h6">WHO ARE WE</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">ABOUT US</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">CONTACT US</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">TERMS OF USE</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">PRIVACY POLICY</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">DISCLAIMER</Typography>
                </Box>
                <Box pt={1}>
                  <Typography variant="body1">HELP & SUPPORT</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Box style={{ paddingRight: "100px" }}>
                  <Box textAlign="center">
                    <Typography variant="h6">WHAT WE OFFER</Typography>
                  </Box>

                  <Box
                    pt={1}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">SKILL COURSES</Typography>
                    <Typography variant="body1">SECTORS</Typography>
                  </Box>
                  <Box
                    pt={1}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">SKILL CENTRE</Typography>
                    <Typography variant="body1">JOB ROLES</Typography>
                  </Box>
                  <Box
                    pt={1}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">JOB EXCHANGE</Typography>
                    <Typography variant="body1">SCHEMES</Typography>
                  </Box>
                  <Box pt={1}>
                    <Typography variant="body1">RECOMMENDATION</Typography>
                  </Box>
                  <Box pt={1}>
                    <Typography variant="body1">SKILL INDIA MAP</Typography>
                  </Box>
                  <Box pt={1}>
                    <Typography variant="body1">
                      LIVE TRAINING SESSIONS
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center">
                  <Typography variant="h6">QUICK LINKS</Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">QUICK LINKS</Typography>
                  <Typography variant="body1">PMKVY A&C GUIDELINES</Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">SECTOR SKILL COUNCIL</Typography>
                  <Typography variant="body1">
                    STANDALONE NOS LISTING
                  </Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">
                    NATIONAL CAREER SERVICE
                  </Typography>
                  <Typography variant="body1">BORROWED QP LISTING</Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">A&A KNOWLEDGE BANK</Typography>
                  <Typography variant="body1">SCPWD BORROWED QP</Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">A&A FAQS</Typography>
                  <Typography variant="body1">QP LISTING</Typography>
                </Box>
                <Box
                  pt={1}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">MOHUA</Typography>
                  <Typography variant="body1">MOHUA</Typography>
                </Box>
              </Grid>
            </Grid>

            <Box mt={4} pb={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    style={{
                      padding: "8px 20px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,.1)",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{ color: "#CCCCCC", margin: "0" }}
                    >
                      Platform is Owned by
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#ffff",
                        margin: "4px",
                      }}
                    >
                      Ministry of Skill Development and Entrepreneurship,
                      Government of India
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box textAlign="right">
                    <Typography>
                      {" "}
                      Last Modified: Sunday, 4 Feb, 2024 | Visitor Count: 176935{" "}
                    </Typography>
                    <Typography>
                      {" "}
                      © Copyright 2023 - All Rights Reserved{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
