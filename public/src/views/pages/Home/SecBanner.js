import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function SecBanner() {
  return (
    <div>
      <Box pt={4} style={{background:"#fff"}}>
        <Container>
          <Box pb={5} textAlign="center">
            <Typography variant="h2"> Building a Skilled India </Typography>
          </Box>
        <ScrollAnimation animateIn="zoomInUp">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center" className="skillCards">
                  <img
                   className="floating-image1"
                    src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/citizen-centric.svg"
                    alt=""
                  />
                  <Box mt={3}>
                    <Typography variant="h3" style={{ fontWeight: "600" }}>
                      Citizen Centric
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="center">
                    <Typography
                      variant="body2"
                      style={{ color: "#333333", maxWidth: "300px" }}
                    >
                      Designed to meet the skilling needs of India’s diverse and
                      aspirational population
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center" className="skillCards">
                  <img
                  className="floating-image2"
                    src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/career-focussed.svg"
                    alt=""
                  />
                  <Box mt={3}>
                    <Typography variant="h3" style={{ fontWeight: "600" }}>
                    Career Focussed
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="center">
                    <Typography
                      variant="body2"
                      style={{ color: "#333333", maxWidth: "300px" }}
                    >
                      Relevant skill courses, certification, jobs and apprenticeships
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box textAlign="center" className="skillCards">
                  <img
                  className="floating-image3"
                    src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/multilingual.svg"
                    alt=""
                  />
                  <Box mt={3}>
                    <Typography variant="h3" style={{ fontWeight: "600" }}>
                    Multilingual
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="center">
                    <Typography
                      variant="body2"
                      style={{ color: "#333333", maxWidth: "300px" }}
                    >
                      Explore Skill India Digital in Multiple Indian languages
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary"> Register </Button>
            </Box>
          </Box>
          </ScrollAnimation>
        </Container>
      </Box>
    </div>
  );
}
