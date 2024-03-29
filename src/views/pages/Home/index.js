import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import BannerSection from "./BannerSection";
import BuildingSkills from "./BuildingSkills";
import DownloadApp from "./DownloadApp";
import SkillIndia from "./SkillIndia";
import StickyAboutSection from "src/component/StickyAboutSection";
function Home(props) {
  return (
    <Page title="Skill India">
      <StickyAboutSection/>
      <Box>
        <BannerSection/>
        <BuildingSkills/>
        <DownloadApp/>
        <SkillIndia/>
      </Box>
    </Page>
  );
}

export default Home;
