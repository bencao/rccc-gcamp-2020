import React from "react";
import Img from "gatsby-image";
import CallOutBanner from "@kiwicom/orbit-components/lib/CallOutBanner";
import Button from "@kiwicom/orbit-components/lib/Button";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

import { schedule as SCHEDULE } from "../data/schedule.json";
import { speakers as SPEAKERS } from "../data/speakers.json";

import Agenda from "../components/agenda";
import Speakers from "../components/speakers";
import Song from "../components/song";

const IndexPage = ({ logoImage, verseBgImage, speakerImages }) => (
  <>
    <CallOutBanner
      title="2020年5月24日週五晚-27日週一 國殤節長週末 賓州費城郊區 Eastern University"
      description={
        <address>1300 Eagle Road, St. Davids, PA 19087-3696</address>
      }
      illustration={<Img fixed={logoImage} />}
      actions={<Button href="/registration">现在注册</Button>}
    >
      <List type="secondary">
        <ListItem>
          宣傳單張（
          <a href="http://www.rccc.org/gcamp/QFL_Brochure_2019_fanti_final_version.pdf">
            繁體版
          </a>{" "}
          <a href="http://www.rccc.org/gcamp/QFL_Brochure_2019_jianti_final_version.pdf">
            简体版
          </a>
          ）
        </ListItem>
        <ListItem>
          宣傳海報（
          <a href="http://www.rccc.org/gcamp/QFLGC2019_Poster_Final_F.png">
            繁體版
          </a>{" "}
          <a href="http://www.rccc.org/gcamp/QFLGC2019_Poster_Final_J.png">
            简体版
          </a>
          ）
        </ListItem>
        <ListItem>
          宣傳視頻（<a href="https://youtu.be/VzPP-6GYfMg">Promotion Video</a>）{" "}
          <a href="https://drive.google.com/file/d/1EEXOGPj_ZQlU0N9GpA870qg8OJb5RtEg/view?usp=drivesdk">
            點擊下載
          </a>
        </ListItem>
      </List>
    </CallOutBanner>

    <Speakers speakers={SPEAKERS} />
    <Agenda schedule={SCHEDULE} />
    <Song />
  </>
);

export default IndexPage;
