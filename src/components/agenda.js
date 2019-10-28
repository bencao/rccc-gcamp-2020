import React from "react";
import Card, {
  CardHeader,
  CardSection
} from "@kiwicom/orbit-components/lib/Card";
import Table, {
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@kiwicom/orbit-components/lib/Table";

export default ({ schedule }) => (
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
          {schedule.map(s => (
            <TableRow key={s.date}>
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
