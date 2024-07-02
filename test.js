let arr=[10,20,30,40,50]
// want output  20,30,40,10,50

function array(arr){
   return arr.slice(1,4).concat(arr[0],arr[4])
}

console.log(array(arr));