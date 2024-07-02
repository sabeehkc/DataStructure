function selectionSort(a) {
    for(let i=0;i<a.length;i++){
        let min = i
        for(let j=i+1;j<a.length;j++){
            if(a[j] < a[min]){
                min = j
            }
        }
        if(min !== i){
            [a[min],a[i]] =[a[i],a[min]]
        }
    }
    return a
}

let arr = [7,10,-6,16,5]
console.log(selectionSort(arr));



// using recursion

// function selectionSort(arr, n = 0) {
//     if (n == arr.length) {
//         return;
//     }

//     let minIndex = n;
//     for (let i = n + 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }

//     if (minIndex != n) {
//         [arr[n], arr[minIndex]] = [arr[minIndex], arr[n]];
//     }

//     selectionSort(arr, n + 1);
// }

// const arr = [-6, 20, 8, -2, 4];
// selectionSort(arr);
// console.log(arr); 