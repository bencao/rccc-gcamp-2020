import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import CallOutBanner from "@kiwicom/orbit-components/lib/CallOutBanner";
import Button from "@kiwicom/orbit-components/lib/Button";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

import { schedule as SCHEDULE } from "../data/schedule.json";
import { speakers as SPEAKERS } from "../data/speakers.json";

import Agenda from "../components/agenda";
import Speakers from "../components/speakers";

const IndexPage = ({ logoImage, verseBgImage, speakerImages }) => (
  <Layout>
    <SEO title="生之追寻2020" description="生之追寻2020" />

    <CallOutBanner
      title="2019年5月24日週五晚-27日週一 國殤節長週末 賓州費城郊區 Eastern University"
      description={
        <address>1300 Eagle Road, St. Davids, PA 19087-3696</address>
      }
      illustration={<Img fixed={logoImage} />}
      actions={<Button>现在注册</Button>}
    >
      <List type="secondary">
        <ListItem>
          宣傳單張（<a href="#">繁體版</a> <a href="#">简体版</a>）
        </ListItem>
        <ListItem>
          宣傳海報（<a href="#">繁體版</a> <a href="#">简体版</a>）
        </ListItem>
        <ListItem>
          宣傳視頻（<a href="#">Promotion Video</a>） <a href="#">點擊下載</a>
        </ListItem>
      </List>
    </CallOutBanner>

    <Agenda schedule={SCHEDULE} />
    <Speakers speakers={SPEAKERS} />
  </Layout>
);

export default IndexPage;
