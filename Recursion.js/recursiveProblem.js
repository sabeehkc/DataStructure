
//                                                                    RECURSION

// 1.RECURSIVE FIBONACCI SEQUENCE

// function recursiveFibonacci(n) {
//     if(n < 2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
// }

// console.log(recursiveFibonacci(0)); //0
// console.log(recursiveFibonacci(1)); //1
// console.log(recursiveFibonacci(6)); //8


// 2.RECURSIVE FACTORIAL OF A NUMBER
// function recursiveFactorial(n) {
//     if(n == 0 ){
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(0)); //1
// console.log(recursiveFactorial(1)); //1
// console.log(recursiveFactorial(5)); //120


// 3.RECURSION-PALINDROME(STRINGS)
// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }
//     if (str[0] === str[str.length - 1]) {
//         return isPalindrome(str.slice(1, -1));
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome("radar")); 
// console.log(isPalindrome("level")); 
// console.log(isPalindrome("hello")); 


// 4.RECURSION-PRIME NUMBER
// function isPrime(n, divisor = 2) {
//     if (n <= 1) {
//         return false; 
//     }
//     if (divisor > Math.sqrt(n)) {
//         return true; 
//     }
//     if (n % divisor === 0) {
//         return false; 
//     }
//     return isPrime(n, divisor + 1);
// }
// console.log(isPrime(5)); 
// console.log(isPrime(17)); 
// console.log(isPrime(4)); 
// console.log(isPrime(15));





// 5.RECURSION-POWER OF TWO
// function isPowerOfTwo(n) {
//     if (n === 1) {
//         return true; 
//     }
//     if (n < 1 || n % 2 !== 0) {
//         return false; 
//     }
//     return isPowerOfTwo(n / 2);
// }
// console.log(isPowerOfTwo(1));   
// console.log(isPowerOfTwo(2));  
// console.log(isPowerOfTwo(4));  
// console.log(isPowerOfTwo(8));  




// 6.RECURSION-POWER OF THREE
// function isPowerOfThree(n) {
//     if (n === 1) {
//         return true;
//     }
//     if (n < 1 || n % 3 !== 0) {
//         return false;
//     }
//     return isPowerOfThree(n / 3);
// }

// console.log(isPowerOfThree(1));   
// console.log(isPowerOfThree(3));  
// console.log(isPowerOfThree(9));  
