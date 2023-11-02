import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import barData from '../scenes/bar/BarData';

const LineChart = () => {
  const data = Object.entries(barData[0].workflow_invocations).map(([time, { invocations }]) => ({
    x: time,
    y: invocations,
  }));

  const colors = 'lightblue';

  return (
    <ResponsiveLine
      data={[{ id: 'invocations', data }]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of Invocations',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enablePointLabel={true}
      useMesh={true}
      colors={colors}
      role="application"
      ariaLabel="Nivo line chart demo"
      pointLabel="y"
      pointLabelYOffset={-12}
      pointSize={8}
    />
  );
};

export default LineChart;
