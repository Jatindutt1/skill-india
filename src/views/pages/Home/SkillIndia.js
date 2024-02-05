import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from './Card';

const SkillIndia = () => {
    return (
        <Box>
            <Container>
                <Box pb={2}>
                    <Typography variant="h2">Skill India Connect</Typography>
                </Box>
                <Grid container spacing={3}>
                    {[1,2,3].map((item, index) => (
                        <Grid item sm={6} md={4} key={index}>
                            <ScrollAnimation animateIn="fadeInUpBig" delay={index * 200}>
                                <Card item={item} />
                            </ScrollAnimation>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillIndia;
