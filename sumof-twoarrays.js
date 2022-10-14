arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 

function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let sum1 = sum(arr_1);
let sum2 = sum(arr_2);
let total = sum1 + sum2;
console.log(total);