// function mergeSortedArrays(arr1, arr2) {
//   const mergedArray = [];
//   let i = 0;
//   let j = 0;

//   for (; i < arr1.length && j < arr2.length; ) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   for (; i < arr1.length; i++) {
//     mergedArray.push(arr1[i]);
//   }

//   for (; j < arr2.length; j++) {
//     mergedArray.push(arr2[j]);
//   }

//   return mergedArray;
// }

// const arr1 = [0, 3, 4, 5, 31];
// const arr2 = [4, 6, 8, 30];
// const mergedArray = mergeSortedArrays(arr1, arr2);

// console.log(mergedArray);

var missingNumber = function (nums) {
  //   console.log(nums);
  let sortNumber = nums.sort();
  //   console.log(sortNumber);
  let output = 0;
  for (let i = 0; i < sortNumber.length; i++) {
    // console.log(sortNumber[i]);
    // console.log(i);
    if (i !== sortNumber[i]) {
      //   console.log(i);
      output += i;
    }
  }
  console.log(output);
};
let number = [9, 6, 4, 2, 3, 5, 7, 0, 1];
missingNumber(number);
