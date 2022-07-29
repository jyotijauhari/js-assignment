let arr = [2,4,6,8];

//finding square of each ele using map
let ans = arr.map((val)=>val*val);

console.log(ans);

//without map
let ans2 = [];

for (let i = 0; i < arr.length; i++) {
    ans2[i] = arr[i]*arr[i]; 
}
console.log(ans2);