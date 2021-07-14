var count = 0;
var result = 0;
const fs = require('fs');
const list = process.argv[2];

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

function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    count ++;
    return unsortedArray;
  }
  
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
      count ++;
    } else {
      resultArray.push(right[rightIndex]);
	  rightIndex++;
    count++;
    }
  }
  result = resultArray;
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

  console.log(mergeSort(fList));
  console.log(`Tri par fusion: ${count} comparaisons - [${result}]`);