//                                                    TIME COMPLEXITY

//1.This example of Big-O Notation this time complexity O(n)-liner (ithinte time complecity input anusrichu marikondirikkum)
// function summation(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(`Answer:${summation(5)}`);

//2.This example of Big-O Notation this time complexity O(1)-constant
// function summation(n){
//     return (n * (n+1)) / 2;
// }

// console.log(`Answer:${summation(10)}`);


//3.This example of Big-O Notation this time complexity O(n2)-Qudratic (use 2 loop)

//    for(let i =1 ;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       
//     }
//    }


//4.This example of Big-O Notation this time complexity O(n3)-Cubic (Use 3 loop)

//for(let i =1 ;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       for(let k=1;k<=j'k++){
//     }
//    }
// } 

//5. O(login)-Logarithm  (input size reduce by half every iteration)





//                                                    SPACE COMPLEXITY

//1.O(1)-constant (no need more space or new array)
//2.O(n)-lenear     (save element another new array)
//3.O(logn)-logarithm (especially for large input sizes)


//                                                     OBJECT - BIG - O

// const person = {                // 1.insert - O(1)   5.Object.keys() - O(n)
//     firstName: "Bruce",         // 2.Remove - O(1)   6.Object.values() - O(n)
//     lastName: "Wayn"            // 3.Access - O(1)   7.Object.entries() - O(n)
// }                               // 4.Search - O(n)

// console.log(person.lastName);


//                                                     ARRAY - BIG - O

// 1.insert / remove at end - O(1)
// 2.insert / remove at beginnig - O(n)
// 3.Access-O(1) 
// 4.Search-O(n)
// 5.Push / pop - O(1)
// 6.Shift / unshift / concat / slice / splice - O(n)
// 7.forEach / map / fiter / reduce - O(n)





// : Calculation not deoendent on input size - O(1) *Constant
// : 1 loop - O(n) *Linear 
// : 2 nested loops - O(n^2) *Quadratic
// : Input size reduced by half - O(log n) *Logarithmic