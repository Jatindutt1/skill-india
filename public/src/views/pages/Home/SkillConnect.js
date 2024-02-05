import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import NewCard from './NewCard'
import ScrollAnimation from 'react-animate-on-scroll';

const AllData = [
    {
        id: ""
    },
    {
        id: ""
    },
    {
        id: ""
    },

]
export default function SkillConnect() {

    return (
        <Box>
            <Container>

                <Box pb={2}>
                    <Typography variant='h2'>Skill India Connect</Typography>
                </Box>
                <Grid container spacing={3}>
                    {
                        AllData.map((item , index) => ((
                            
                            <Grid item sm={6} md={4}>
                                <ScrollAnimation animateIn="fadeInUpBig" delay={index * 200}>
                                <NewCard item={item} />
                            </ScrollAnimation>
                            </Grid>
                        )))
                    }

                </Grid>
            </Container>
        </Box>
    )
}
