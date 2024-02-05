import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoNewspaper } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";

export default function StickyAboutSection() {
  return (
    <div className='mainStickySEction'>
        <Box className="widget-section-1 BoxStyleCss">
            <BiPhoneCall style={{fontSize:"25px"}}/>
            <Typography variant='h4'>
                8800568548
            </Typography>

        </Box>
        <Box className="widget-section-2 BoxStyleCss">
            <HiOutlineLightBulb style={{fontSize:"25px"}}/>
            <Typography variant='h4'>
                Learnig Resources
            </Typography>

        </Box>
        <Box className="widget-section-3 BoxStyleCss">
            <IoNewspaper style={{fontSize:"25px"}}/>
            <Typography variant='h4'>
                Impportant Link
            </Typography>

        </Box>
        <Box className="widget-section-4 BoxStyleCss">
            <MdDashboard style={{fontSize:"25px"}}/>
            <Typography variant='h4'>
                DashBoards
            </Typography>

        </Box>
        <Box className="widget-section-5 BoxStyleCss">
            <FaBullhorn style={{fontSize:"25px"}}/>
            <Typography variant='h4'>
                Announcements
            </Typography>

        </Box>
        
    </div>
  )
}
