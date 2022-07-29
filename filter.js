let arr = [1,2,3,4,5,6];

//finding even no using filter
let ans = arr.filter((val)=> (val%2)==0);

console.log(ans);

//without filter
let ans2 = [];

for (let i = 0; i < arr.length; i++) {
    if((arr[i]%2)==0){
        ans2.push(arr[i]);
    }
}
console.log(ans2);