import React, { useState } from "react";
import NavigationList, {
  NavigationListItem
} from "@kiwicom/orbit-components/lib/NavigationList";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import AccountCircle from "@kiwicom/orbit-components/lib/icons/AccountCircle";
import Bus from "@kiwicom/orbit-components/lib/icons/Bus";
import Calendar from "@kiwicom/orbit-components/lib/icons/Calendar";
import OnlineCheckin from "@kiwicom/orbit-components/lib/icons/OnlineCheckin";
import Messages from "@kiwicom/orbit-components/lib/icons/Messages";
import KiwicomCare from "@kiwicom/orbit-components/lib/icons/KiwicomCare";
import Gallery from "@kiwicom/orbit-components/lib/icons/Gallery";
import Child from "@kiwicom/orbit-components/lib/icons/Child";
import City from "@kiwicom/orbit-components/lib/icons/City";
import Feedback from "@kiwicom/orbit-components/lib/icons/Feedback";
import Lounge from "@kiwicom/orbit-components/lib/icons/Lounge";
import { Link } from "gatsby";

const NavButton = ({ isCurrent, label, href, icon }) => (
  <Link to={href} style={{ textDecoration: "none" }}>
    <NavigationListItem selectable selected={isCurrent} icon={icon}>
      {label}
    </NavigationListItem>
  </Link>
);

export default ({ current }) => {
  const [visible, setVisible] = useState(0);

  return (
    <>
      <NavigationBar
        onMenuOpen={() => setVisible(true)}
        dataTest="top-navigation"
      >
        <Heading type="title1" element="h1">
          2020 生之追尋福音營
        </Heading>
      </NavigationBar>
      <Drawer
        dataTest="side-navigation"
        width="320px"
        shown={visible}
        noPadding
        onClose={() => setVisible(false)}
      >
        <NavigationList>
          <NavButton
            isCurrent={current === "index"}
            href="/"
            label="主頁"
            icon={<City />}
          />
          <NavButton
            isCurrent={current === "registration"}
            href="/registration"
            label="註冊"
            icon={<OnlineCheckin />}
          />
          <NavButton
            isCurrent={current === "agenda"}
            href="/agenda"
            label="講座"
            icon={<Calendar />}
          />
          <NavButton
            isCurrent={current === "drama"}
            href="/drama"
            label="話劇"
            icon={<Lounge />}
          />
          <NavButton
            isCurrent={current === "youth"}
            href="/youth"
            label="青少年營 Youth"
            icon={<KiwicomCare />}
          />
          <NavButton
            isCurrent={current === "kids"}
            href="/kids"
            label="兒童營"
            icon={<Child />}
          />
          <NavButton
            isCurrent={current === "testimony"}
            href="/testimony"
            label="同工心聲"
            icon={<Messages />}
          />
          <NavButton
            isCurrent={current === "travel"}
            href="/travel"
            label="出行準備"
            icon={<Bus />}
          />
          <NavButton
            isCurrent={current === "campus"}
            href="/campus"
            label="營會風光"
            icon={<Gallery />}
          />
          <NavButton
            isCurrent={current === "about"}
            href="/about"
            label="關於我們"
            icon={<Feedback />}
          />
        </NavigationList>
      </Drawer>
    </>
  );
};
