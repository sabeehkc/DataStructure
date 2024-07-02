//Linear Search
function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //-1



// RECURSION-LINEAR SEARCH
function linearSearchRecursive(arr, target, i = 0) {
    if (i >= arr.length) {
        return -1;
    }
    if (arr[i] === target) {
        return i;
    }
    return linearSearchRecursive(arr, target, i + 1);
}
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 10)); // 2
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 7));  // 4 
console.log(linearSearchRecursive([5, 4, 10, 8, 7], 4));  // 1

