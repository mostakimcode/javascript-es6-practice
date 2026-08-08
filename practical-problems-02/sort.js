/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/

const sortDescending = (nums) => {
  let nums2 = [...nums];
    let sorted = nums2.sort((a,b) => b-a)  // a-b : ascending order
    return sorted;
}