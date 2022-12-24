import React from 'react';
import DiagramTab from './DiagramTab';
import DoughnutChart from './DoughnutChart';
import { DonutSection, MainContainer, TabHeader } from './styled';

function StatTab() {
  return (
    <MainContainer>
      <DonutSection>
        <TabHeader>Statistics</TabHeader>
        <DoughnutChart />
      </DonutSection>
      <DiagramTab />
    </MainContainer>
  );
}

export default StatTab;
