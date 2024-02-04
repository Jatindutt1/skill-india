import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import SecBanner from "./SecBanner";
import Download from "./Download";
import SkillConnect from "./SkillConnect";
function Home(props) {
  return (
    <Page title="Skill India">
      <Box>
        <Banner/>
        <SecBanner/>
        <Download/>
        <SkillConnect/>
      </Box>
    </Page>
  );
}

export default Home;
