function bubbleSort(arr) {
    let swapped 
    do {
        swapped = false
        for(let i=0;i<arr.length -1;i++){
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)

}

const arr = [8,20,-2,4,-6]
bubbleSort(arr)  //O(n^2)
console.log(arr);



//using recursion

function bubbleSortRecursion(arr, n = arr.length){
    if(n==1){
        return;
    }

    let swapped = false

    for(let i=0;i<n-1;i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            swapped = true
        }
    }

    if(!swapped){
        return
    }

    bubbleSortRecursion(arr , n - 1)
}

// const arr = [8,20,-2,4,-6]
bubbleSortRecursion(arr)
console.log(arr);