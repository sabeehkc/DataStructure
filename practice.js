
//1. FIBONACCI SEQUENCE
//Big-O = O(n)
// function fibonacci(n) {
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2)); //[0,1]
// console.log(fibonacci(3)); //[0,1,1]
// console.log(fibonacci(5)); //[0,1,1,2,3]
// console.log(fibonacci(7)); //[0,1,1,2,3,5,8]


//2. FACTORIAL OF A NUMBER
//Big-O = O(n)
// function factorial(n) {
//     let res = 1;
//     for(let i=2;i <= n;i++){
//         res = res*i
//     }
//     return res
// }

// console.log(factorial(0)); //1
// console.log(factorial(1)); //1
// console.log(factorial(5)); //120

//3. PRIME NUMBER
//Big-O = O(n)
// function isPrime(n) {
//     if(n < 2){
//         return false
//     }

//     for(let i=2;i<n;i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(1)); //false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false


//4. PRIME NUMBER 2
//Big-O = O(sqrt(n))
// function isPrime(n) {
//     if(n < 2){
//         return false
//     }

//     for(let i=2;i <= Math.sqrt(n);i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(1)); //false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false

//5. POWER OF TWO
//Big-O = O(logn)
// function isPowerOfTwo(n) {
//     if(n < 1){
//         return false
//     }
//     while(n > 1) {
//         if(n % 2 !==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

//5. POWER OF TWO 2
//Big-O O(1)
// function isPowerOfTwo2(n) {
//     if(n < 1){
//         return false
//     }
//     return (n & (n-1)) === 0;
// }

// console.log(isPowerOfTwo2(1));
// console.log(isPowerOfTwo2(2));
// console.log(isPowerOfTwo2(5));

