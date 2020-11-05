var arr = [{id:10,name:'start senior'},{id:8,name:'fengfeng senior'},{id:15,name:'yuyu senior'},{id:2,name:'xinxin senior'}]
arr=arr.sort(function(a,b){return a.id-b.id;});     //通过id相减可必得一正一负
console.log(arr);