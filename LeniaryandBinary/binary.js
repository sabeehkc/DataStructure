// Binary Search 
function binarySearch(arr,target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )

        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex -1
        } else {
            leftIndex = middleIndex + 1
        }

    }
    return -1
}


console.log(binarySearch([-5,2,4,6,10],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10],20));


//RECURSIVE BINARY SEARCH

function recursiveBinarySearch(arr,target) {
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex) {
    if(leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex  = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]) {
       return search(arr,target,leftIndex,middleIndex-1)
    } else {
       return search(arr,target,middleIndex+1,rightIndex)
    }
}

console.log(recursiveBinarySearch([-5,2,4,6,10],10));
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
console.log(recursiveBinarySearch([-5,2,4,6,10],20));



function binarySearchh(num , t) {
    let start = 0
    let end = num.length -1

    while(start <= end) {
        let middle = Math.floor((start + end) / 2 )

        if(num[middle] === t){
            return middle
        }

        if(t < num[middle]){
            end = middle -1
        } else {
            start = middle + 1
        }
    }
    return -1
}

let arr = [3,-3,4,5,6,2]

let num = arr.sort((a,b) => a-b);

console.log(num);

console.log(binarySearchh(num,5));


