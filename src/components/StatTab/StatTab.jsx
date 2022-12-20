import React from 'react'
import DiagramTab from './DiagramTab';
import DoughnutChart from './DoughnutChart';
import { MainContainer} from './styled';

function StatTab() {
  
  
  return (
    <MainContainer >
      Statistics

      <DiagramTab />
    <DoughnutChart />
    </MainContainer >
  );
}

export default StatTab;