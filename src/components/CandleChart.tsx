import React from 'react';
import { init, getInstanceByDom } from 'echarts';
import options from '@/chartUtils/candleSettings';
import type { ECharts } from 'echarts';

interface ReactEChartsProps {
  loading?: boolean;
  theme?: 'light' | 'dark';
  pair?: string
}

export function CandleChart({
  loading,
  theme,
}: ReactEChartsProps): JSX.Element {
  const chartRef = React.useRef<HTMLDivElement>(null);

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
      chart.setOption(options);
    }
  }, [options, theme]);

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
