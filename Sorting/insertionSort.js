function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        let numbertoInsert = arr[i]
        let j = i-1
        while (j >= 0 && arr[j] > numbertoInsert) {
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numbertoInsert
    }
}

const arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr);



function insertionSortRecursion(arr, n = arr.length) {
    if (n <= 1) {
        return;
    }
        
    insertionSort(arr, n - 1);
        
    let last = arr[n - 1];
    let j = n - 2;     
   
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }
    
    arr[j + 1] = last;
}  

// const arr = [8, 20, -2, 4, -6];
// insertionSortRecursion(arr);
// console.log(arr); 
