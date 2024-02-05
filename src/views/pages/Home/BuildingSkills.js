import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const skillData = [
  {
    id: 1,
    imageSrc: "https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/citizen-centric.svg",
    title: "Citizen Centric",
    description: "Designed to meet the skilling needs of India’s diverse and aspirational population",
  },
  {
    id: 2,
    imageSrc: "https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/career-focussed.svg",
    title: "Career Focused",
    description: "Relevant skill courses, certification, jobs and apprenticeships",
  },
  {
    id: 3,
    imageSrc: "https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/multilingual.svg",
    title: "Multilingual",
    description: "Explore Skill India Digital in Multiple Indian languages",
  },
];

export default function BuildingSkills() {
  return (
    <div>
      <Box pt={4} style={{ background: "#fff" }}>
        <Container>
          <Box pb={5} textAlign="center">
            <Typography variant="h2"> Building a Skilled India </Typography>
          </Box>
          <ScrollAnimation animateIn="zoomInUp">
            <Box>
              <Grid container spacing={3}>
                {skillData.map((item) => (
                  <Grid key={item.id} item xs={12} sm={6} md={4}>
                    <Box textAlign="center" className="skillCards">
                      <img
                        className={`floating-image${item.id}`}
                        src={item.imageSrc}
                        alt=""
                      />
                      <Box mt={3}>
                        <Typography variant="h3" style={{ fontWeight: "600" }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Box mt={2} display="flex" justifyContent="center">
                        <Typography
                          variant="body2"
                          style={{ color: "#333333", maxWidth: "300px" }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box mt={4} textAlign="center">
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Box>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>
    </div>
  );
}
