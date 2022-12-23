import { Box } from 'components/Box';
import React from 'react';
import DiagramTab from './DiagramTab';
import DoughnutChart from './DoughnutChart';
import { MainContainer, TabHeader } from './styled';

function StatTab() {
  return (
    <MainContainer>
      <Box mx="auto">
        <TabHeader>Statistics</TabHeader>
        <DoughnutChart />
      </Box>
      <DiagramTab />
    </MainContainer>
  );
}

export default StatTab;
