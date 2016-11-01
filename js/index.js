function con(num)
{
	var Con=document.getElementById("root")
    var str = Con.innerText;
    str=(str==0?"":str);
    str+=num;
    Con.innerText = str;
}
function tools(n)
{   var Con=document.getElementById("root")
    var cc = Con.innerText;
    cc=(cc==0?"":cc);
    Con.innerText = cc+n;
}
// function tool(m){
// 	var Con=document.getElementById("root")
// 	var str = Con.innerText;
// 	str=(str==0?"":str);
// 	Con.innerText = str-m；
// }
// function clear(j){
// 	var Con=document.getElementById("root")
// 	var j = Con.innerText;
// 	j=(j!==0?"":0);
