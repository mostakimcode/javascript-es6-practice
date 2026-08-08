
/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

const mergeAndDedublicate = (arr1, arr2) => {
  let arr =[...arr1,...arr2];
  let finalArray = new Set(arr);
  return [...finalArray];
}