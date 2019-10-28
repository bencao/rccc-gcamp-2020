import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import CallOutBanner from "@kiwicom/orbit-components/lib/CallOutBanner";
import Button from "@kiwicom/orbit-components/lib/Button";
import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent
} from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";
import Table, {
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@kiwicom/orbit-components/lib/Table";

import SCHEDULES from "../data/schedule.json";
import SPEAKERS from "../data/speakers.json";

const Speaker = ({ name, avatarUrl, description }) => (
  <CardSection>
    <CardSectionHeader>
      <img src={avatarUrl} width="160" height="200" />
      <Heading type="title3" element="h3">
        {name}
      </Heading>
    </CardSectionHeader>
    <CardSectionContent>{description}</CardSectionContent>
  </CardSection>
);

const Speakers = () => (
  <Card>
    <CardHeader title="讲员信息" />
    {SPEAKERS.map(s => (
      <Speaker {...s} />
    ))}
  </Card>
);

const Agenda = () => (
  <Card>
    <CardHeader title="日程安排" />
    <CardSection>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>日期</TableCell>
            <TableCell>上午</TableCell>
            <TableCell>下午</TableCell>
            <TableCell>晚上</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SCHEDULES.map(s => (
            <TableRow>
              <TableCell>{s.date}</TableCell>
              <TableCell>{s.morning}</TableCell>
              <TableCell>{s.afternoon}</TableCell>
              <TableCell>{s.evening}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardSection>
  </Card>
);

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

    <Agenda />
    <Speakers />
  </Layout>
);

export default IndexPage;
