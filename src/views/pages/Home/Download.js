import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Download() {
  return (
    <Box>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={6}>
            <ScrollAnimation animateIn="fadeInLeftBig">
              <Typography variant="h2" style={{ color: "#042CB0" }}>
                {" "}
                Download the Skill India Digital App!{" "}
              </Typography>
              <Box mt={1}>
                <Typography variant="h6" style={{ color: "#666666" }}>
                  {" "}
                  Use your mobile phone to meet your skilling needs{" "}
                </Typography>
              </Box>
              <Box mt={4} style={{ display: "flex", alignItems: "center", }}>
                <img
                  src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/download-app/Apple.svg"
                  alt=""
                />
                <Box ml={2}>

                  <img
                    src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/download-app/Google.svg"
                    alt=""
                  />
                </Box>

              </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item sm={6}>
            <ScrollAnimation animateIn="fadeInRightBig">

              <img
                src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/download-app/download-app-mobile.svg"
                alt=""
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
