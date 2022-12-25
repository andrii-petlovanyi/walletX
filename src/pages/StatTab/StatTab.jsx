import SectionAnim from 'components/Animations/SectionAnim';
import React from 'react';
import DiagramTab from '../../components/StatTab/DiagramTab';
import DoughnutChart from '../../components/StatTab/DoughnutChart';
import {
  DonutSection,
  MainContainer,
  TabHeader,
} from '../../components/StatTab/styled';

function StatTab() {
  return (
    <MainContainer>
      <SectionAnim delay={0.2}>
        <DonutSection>
          <TabHeader>Statistics</TabHeader>
          <DoughnutChart />
        </DonutSection>
      </SectionAnim>
      <SectionAnim delay={0.3}>
        <DiagramTab />
      </SectionAnim>
    </MainContainer>
  );
}

export default StatTab;
