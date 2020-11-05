//LV0.5
var sum=0,arr=[1,'5',"7",3,20,9];
sum=addSum(arr);
console.log("The sum is",sum);

function addSum(arr){
    for(var i=0;i<arr.length;i++){
        sum+=Number(arr[i]);            //将数组中的非数字类型转化为数字
    }
    return sum;
    }
