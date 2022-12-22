import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ChartContainer, DoughnutBalance } from './styled';
import { numberSpace } from 'helpers/numberSpace';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const statData = useSelector(state => state.statistic.statistic);
  const balance = useSelector(state => state.auth.user.balance);

  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (!statData?.categoriesSummary?.length) return setExpenses([]);
    const filteredStat = statData.categoriesSummary.reduce(function (
      prev,
      curr
    ) {
      if (curr.type !== 'INCOME') {
        return [...prev, curr.total];
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
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255,69,0)',
          'rgb(255,140,0)',
          'rgb(255,215,0)',
          'rgb(0,128,0)',
          'rgb(30,144,255)',
          'rgb(148,0,211)',
          'rgb(255,20,147)',
          'rgb(240,128,128)',
          'rgb(255,160,122)',
          'rgb(255,222,173)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = { cutout: '70%' };

  return (
    <>
      <ChartContainer>
        {expenses?.length > 0 && <Doughnut data={data} options={options} />}
        {expenses?.length > 0 && (
          <DoughnutBalance>
            {'\u20B4'} {numberSpace(balance)}
          </DoughnutBalance>
        )}
      </ChartContainer>
    </>
  );
};

export default DoughnutChart;
