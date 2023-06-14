import React from 'react';
import { init, getInstanceByDom } from 'echarts';
import options from '@/chartUtils/candleSettings';
import { calculateMA, splitData } from '@/chartUtils/utilFunctions';
import { mockCandleData } from '@/mockData/mockData';
import type { ECharts } from 'echarts';

interface ReactEChartsProps {
  loading?: boolean;
  theme?: 'light' | 'dark';
  pair?: string
}

export function CandleChart({
  loading,
  theme,
  pair
}: ReactEChartsProps): JSX.Element {
  const chartRef = React.useRef<HTMLDivElement>(null);

  const fetchCandleRawData = async () => {
    return await mockCandleData
  }

  const buildCandleChart = async (defaultOptions) => {
    const fetchedData = await fetchCandleRawData()
    const processedData = splitData(fetchedData)
    
    defaultOptions.title.text = pair;
    defaultOptions.xAxis.data = processedData.categoryData;
    defaultOptions.series[0].data = processedData.values;
    defaultOptions.series[1].data = calculateMA(5, processedData)
    defaultOptions.series[2].data = calculateMA(10, processedData);
    defaultOptions.series[3].data = calculateMA(20, processedData);
    defaultOptions.series[4].data = calculateMA(30, processedData);

    console.log(defaultOptions)

    return defaultOptions
  }

  React.useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  React.useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      (async () => {
        const chartOptions = await buildCandleChart(options);
        chart.setOption(chartOptions);
      })();
    }
  },);

  React.useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart.showLoading() : chart.hideLoading();
    }
  }, [loading, theme]);

  return <div ref={chartRef} className='w-full h-full pt-4' />;
}

export default CandleChart;
