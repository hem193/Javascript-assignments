const tdVal = document.querySelectorAll("td");
const calcResult = document.getElementById("calresult");
const calcinput = document.getElementById("calcinput");
let tdInput='';

tdVal.forEach(function calc(val){
 val.addEventListener("click", function calculator(val){
    let td = val.currentTarget.innerText;
    
     if (td == '←') {
      
        tdInput = calcinput.innerText;
        tdInput = tdInput.substring(0, tdInput.length-1);
        calcinput.innerText = tdInput;

        if(tdInput != ''){
        calcResult.innerHTML = eval(tdInput);
      }else{
         calcResult.innerHTML = null;
      }
     } else if (td == 'C') {
        calcinput.innerText = null;
        calcResult.innerText = null;
     } else if (td == '=') {
        calcinput.innerHTML = `<strong style='color:green; font-size:28px;'>${calcResult.innerText}</strong>`;
        calcResult.innerText = null;
     } else if(calcinput.innerText.match('%')){
        tdInput = calcinput.innerText;
        tdInput = tdInput.replaceAll("%", "/100*");
        tdInput += td;
        calcinput.innerText += td;
        calcResult.innerText = eval(tdInput);
    } else {
         calcinput.innerText += td;
         calcResult.innerHTML = eval(calcinput.innerText);
     }
    

 });
}) 

