import React from "react";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent
} from "@kiwicom/orbit-components/lib/Card";

export default ({ speakers }) => (
  <Card>
    <CardHeader title="講員信息" />
    {speakers.map(s => (
      <CardSection key={s.name}>
        <CardSectionHeader>
          <img src={s.avatarUrl} width="160" height="200" />
          <Heading type="title3" element="h3">
            {s.name}
          </Heading>
        </CardSectionHeader>
        <CardSectionContent>{s.description}</CardSectionContent>
      </CardSection>
    ))}
  </Card>
);
