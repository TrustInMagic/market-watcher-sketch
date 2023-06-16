import React, { useState, useEffect, useRef } from 'react';
import { init, getInstanceByDom } from 'echarts';
import options from '@/chartUtils/candleSettings';
import { calculateMA, splitData } from '@/chartUtils/utilFunctions';
import { mockCandleData } from '@/mockData/mockData';
import type { ECharts } from 'echarts';

interface ReactEChartsProps {
  theme?: 'light' | 'dark';
  pair?: string;
}

const CandleChart = ({
  theme,
  pair,
}: ReactEChartsProps): JSX.Element => {
  const [chartLoading, setChartLoading] = useState(true);
  const chartRef = useRef<HTMLDivElement>(null);

  const fetchCandleRawData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCandleData);
      }, 2000); 
    });
  };

  const buildCandleChart = React.useCallback(async () => {
    const fetchedData = await fetchCandleRawData();
    const processedData = splitData(fetchedData);
    const defaultOptionsCopy = JSON.parse(JSON.stringify(options));

    defaultOptionsCopy.title.text = pair;
    defaultOptionsCopy.xAxis.data = processedData.categoryData;
    defaultOptionsCopy.series[0].data = processedData.values;
    defaultOptionsCopy.series[1].data = calculateMA(5, processedData);
    defaultOptionsCopy.series[2].data = calculateMA(10, processedData);
    defaultOptionsCopy.series[3].data = calculateMA(20, processedData);
    defaultOptionsCopy.series[4].data = calculateMA(30, processedData);

    return defaultOptionsCopy;
  }, [pair]);

  useEffect(() => {
    // Initialize chart
    if (chartRef.current !== null) {
      const chart: ECharts = init(chartRef.current, theme);

      // Add chart resize listener
      const resizeChart = () => {
        chart.resize();
      };
      window.addEventListener('resize', resizeChart);

      // Fetch data and set up chart
      (async () => {
        const chartOptions = await buildCandleChart();
        chart.setOption(chartOptions);
        setChartLoading(false);
      })();

      // Return cleanup function
      return () => {
        chart.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [theme, pair, buildCandleChart]);

  useEffect(() => {
    // Update chart loading status
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chartLoading === true ? chart.showLoading() : chart.hideLoading();
      }
    }
  }, [chartLoading, theme]);

  return <div ref={chartRef} className='w-full h-full pt-4' />;
}

export default CandleChart;
