const upColor = '#00da3c';
const upBorderColor = '#008F28';
const downColor = '#ec0000';
const downBorderColor = '#8A0000';
const backgroundColor = '#121212';

const options = {
  backgroundColor: backgroundColor,
  title: {
    text: '',
    left: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  legend: {
    data: ['Candles', 'MA5', 'MA10', 'MA20', 'MA30'],
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%',
  },
  xAxis: {
    type: 'category',
    data: [],
    boundaryGap: false,
    axisLine: { onZero: false },
    splitLine: { show: false },
    min: 'dataMin',
    max: 'dataMax',
  },
  yAxis: {
    scale: true,
    splitArea: {
      show: true,
    },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 50,
      end: 100,
    },
    {
      show: true,
      type: 'slider',
      top: '90%',
      start: 50,
      end: 100,
    },
  ],
  series: [
    {
      name: 'Candles',
      type: 'candlestick',
      data: [],
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor,
      },
    },
    {
      name: 'MA5',
      type: 'line',
      data: null,
      smooth: true,
      lineStyle: {
        opacity: 0.5,
      },
    },
    {
      name: 'MA10',
      type: 'line',
      data: null,
      smooth: true,
      lineStyle: {
        opacity: 0.5,
      },
    },
    {
      name: 'MA20',
      type: 'line',
      data: null,
      smooth: true,
      lineStyle: {
        opacity: 0.5,
      },
    },
    {
      name: 'MA30',
      type: 'line',
      data: null,
      smooth: true,
      lineStyle: {
        opacity: 0.5,
      },
    },
  ],
};


export default options