function calculate(){
var num1El=document.getElementById("num1");
var num1=num1El.value;
var num2El=document.getElementById("num2");
var num2=num2El.value;
var mathRadio =document.getElementsByName("math")
for(var i=0;i<mathRadio.length;i++)
{
    if(mathRadio[i].checked){
        var math = mathRadio[i].value;
        break;
    }
}
var result;
switch(math){
    case "Add":result=+num1 + +num2;
    break;
    case "Sub":result=num1 - num2;
    break;
    case "Multy":result=num1 * num2;
    break;
    case "Div":result=num1 / num2;
    break;
   
}
var resultEl = document.getElementById("result");
resultEl.innerText=result;
}



