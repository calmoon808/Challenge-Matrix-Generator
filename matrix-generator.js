function matrixGenerator(rows, columns) {
  let arr = [];
  for (let i = 0; i < rows; i++){
    let row = [];
    for (let j = 0; j < columns; j++){
      row.push(Math.floor(Math.random() * 100) + 1);
    }
    row = row.sort(function(a, b){return a - b});
    if (arr.length === 0){
      arr.push(row);
    } else if (row[0] <= arr[0][0]){
      arr.unshift(row);
    } else {
      if (row[0] > arr[arr.length - 1][0]){
        arr.push(row);
      } else {
        for (let k = 0, n = arr.length - 1; k < n; k++){
          if (row[0] > arr[k][0] && row[0] <= arr[k + 1][0]){
            arr.splice(k + 1, 0, row);
          }
        }
      }
    }
  }
  return arr;
}

module.exports = matrixGenerator;

matrixGenerator(4, 4);