// find frequency of numbers in a array
function findFrequency(nums){
    let frequencyMap = {}

    for(let num of nums){
        if(frequencyMap[num]){
            frequencyMap[num]++
        }else{
            frequencyMap[num] = 1
        }
    }
    return frequencyMap
}

let nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
let frequency = findFrequency(nums)
console.log(frequency);


//write a function to initialize a 2D array with random numbers in js
function initialize2DAraay(row,clom,min,max){

    let array = []

    function randomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for(let i=0;i<row;i++){
        let row = []

        for(let j=0;j<clom;j++){
            row.push(randomNumber(min,max))
        }

        array.push(row)
    }

    return array
}

let row = 3
let clom = 2
let min = 1
let max = 100

console.log((initialize2DAraay(row,clom,min,max)));


// ARRAY- Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array([3,0,1], n = 3)
function missingNumber(arr){
    for(let i=0;i<arr.length;i++){
        if(!arr.includes(i)){
            return i
        }
    }
}

let arr = [3,0,1]
console.log(missingNumber(arr));
