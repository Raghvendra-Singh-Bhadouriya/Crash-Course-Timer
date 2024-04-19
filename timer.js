let display = document.querySelector("#display");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let inputContainer = document.querySelector("#inputs-container")

let hourPoints = document.querySelector("#hour-double-point");
let minutePoints = document.querySelector("#minute-double-point");

let hourInput = document.querySelector("#hour-input");
let minuteInput = document.querySelector("#minute-input");
let secondInput = document.querySelector("#second-input");

let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let resetBtn = document.querySelector("#reset");
let id;

//===================================Start Timer==================================//
function startTimer(){
    let hourValue = parseInt(hourInput.value||0);
    let minuteValue = parseInt(minuteInput.value||0);
    let secondValue = parseInt(secondInput.value||0);


    secondInput.value="";
    minuteInput.value="";
    hourInput.value="";

    id = setInterval(() => {
         secondValue--;
         if(secondValue < 0){
             secondValue = 59;
             minuteValue--;

            if(minuteValue < 0){
                minuteValue = 59;
                hourValue--;

                if(hourValue < 0){
                    hourValue = 0;
                    minuteValue = 0;
                    secondValue = 0;
                    clearInterval(id);
                }
            }
         }
         
        second.innerHTML=(secondValue < 10 ? "0":"")+secondValue+"<span>s</span>";
        minute.innerHTML=(minuteValue < 10 ? "0":"")+minuteValue+"<span>m</span>";
        hour.innerHTML=(hourValue < 10 ? "0":"")+hourValue+"<span>h</span>";    
    }, 1000);  
    display.style.display = "block";
    inputContainer.style.display = "none"
    startBtn.disabled=true;
    display.style.display="flex";
}
startBtn.addEventListener("click", startTimer)


//===================================Puase Timer==================================//
function pauseTimer(){
    clearInterval(id)
    startBtn.disabled=false;
}
pauseBtn.addEventListener("click",pauseTimer);


//===================================Reset Timer==================================//
function resetTimer(){
    clearInterval(id);

    hour.innerHTML="00"+"<span>h</span>";
    minute.innerHTML="00"+"<span>m</span>";
    second.innerHTML="00"+"<span>s</span>";

    startBtn.disabled=false;
    display.style.display="none";
    inputContainer.style.display="block";
}
resetBtn.addEventListener("click", resetTimer);

//===================================Show and Hide Function==================================//
function showAndHide(){
    clearInterval(id);
    hour.textContent="00";
    minute.textContent="00";
    second.textContent="00";

    display.style.display="flex";
    display.style.display="none";
    inputContainer.style.display="block";
}
display.addEventListener("click", showAndHide);

