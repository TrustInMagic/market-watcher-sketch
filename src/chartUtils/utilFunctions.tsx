function splitData(rawData: (number | string)[][]) {
  const categoryData = [];
  const values = [];
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
  }
  return {
    categoryData: categoryData,
    values: values,
  };
}

function calculateMA(dayCount: number, processedData) {
  var result = [];
  for (var i = 0, len = processedData.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += +processedData.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}

export { splitData, calculateMA };
