import React from "react";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent
} from "@kiwicom/orbit-components/lib/Card";

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

export default ({ speakers }) => (
  <Card>
    <CardHeader title="讲员信息" />
    {speakers.map(s => (
      <Speaker {...s} />
    ))}
  </Card>
);
