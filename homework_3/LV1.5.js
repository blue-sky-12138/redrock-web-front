var test="",result=[],arr=["myfirstactivity","today activity","yourActivity","activitys"];
for (var i=0;i<arr.length;i++){
    var test=arr[i];
    check=test.indexOf("activity");
    if(check!=-1){
        result.push(arr[i]);
    }
}
console.log('The new array is:',result);