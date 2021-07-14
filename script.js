const mergeSort = require ('./merge');
const fs = require('fs');
const fileName = process.argv[2];

try {
  const data = fs.readFileSync(list, "utf8");
  var dataSplit = data.split(" ");
  var listTocheck = dataSplit.map(function (i) {
    return Number(i);
  });
  var fList = listTocheck.filter(function (value) {
    return isNaN(value) == false;
  });
  console.log(fList);
} catch (error) {
  console.error(error.message);
};