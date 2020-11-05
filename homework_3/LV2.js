var arr=[[1,2] , 3,[4,[5,[6,[8],9],10] , 7]]
arr=unflod(arr);
console.log(arr);

function unflod(arr){
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){      //判断数组中的元素是不是数组
            arr=[].concat(...arr);
        }
        }
    return arr;
}