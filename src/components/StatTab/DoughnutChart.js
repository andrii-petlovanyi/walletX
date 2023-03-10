import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ChartContainer, DoughnutBalance } from './styled';
import { numberSpace } from 'helpers/numberSpace';
import colorsDonut from 'helpers/colorsDonut';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const statData = useSelector(state => state.statistic.statistic);

  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (!statData?.categoriesSummary?.length) return setExpenses([]);
    const filteredStat = statData.categoriesSummary.reduce(function (
      prev,
      curr
    ) {
      if (curr.type !== 'INCOME') {
        return [...prev, Math.abs(curr.total)];
      } else {
        return [...prev];
      }
    },
    []);
    setExpenses(filteredStat);

    const filteredLabel = statData.categoriesSummary.reduce(function (
      prev,
      curr
    ) {
      if (curr.type !== 'INCOME') {
        return [...prev, curr.name];
      } else {
        return [...prev];
      }
    },
    []);
    setCategory(filteredLabel);
  }, [statData]);

  const data = {
    labels: category,
    datasets: [
      {
        data: expenses,
        backgroundColor: colorsDonut,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: '70%',
  };

  return (
    <>
      <ChartContainer>
        {expenses?.length > 0 && <Doughnut data={data} options={options} />}
        {expenses?.length > 0 && (
          <DoughnutBalance>
            {'\u20B4'} {numberSpace(Math.abs(statData?.expenseSummary))}
          </DoughnutBalance>
        )}
      </ChartContainer>
    </>
  );
};

export default DoughnutChart;
