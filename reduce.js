let arr = [2,4,6,8];

//finding sum of array with reduce
let ans = arr.reduce((acc,val)=>acc+val);

console.log(ans);

//without reduce
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
console.log(sum);