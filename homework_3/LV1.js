// LV1
var ch="welcome-to-redrock's-web-R&D";
console.log('The former name is:',ch);
ch=change(ch);
console.log("The after name is:",ch);

function change(ch){
    var result="";
    for(i=0;i<ch.length;i++){
        if(ch[i]=="-"){                 //判断单词连接点
            if(i<(ch.length-1)){        //排除'-'是最后一个字符的情况
                i++;                    //跳过'-'并加入转换过的字母
                result+=ch[i].toUpperCase();
            }
            continue;
        }
        result+=ch[i];
    }
    return result;
}