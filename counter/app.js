/*const up = document.getElementById("Btn-");
const rst = document.getElementById("BtnRst");
const down = document.getElementById("Btn+");

let value = 0;
document.getElementById("num").innerHTML = value;

up.addEventListener("click", increese)

function increese (value) {
    value++;
}

*/

let counter = 0;

let buttons = document.querySelectorAll("button")
let value = document.getElementById("num")

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        if(button.innerText == "-") {
            counter--;
        } else if (button.innerText == "RST") {
            counter = 0;
        } else {
            counter++;
        }
        
        if (counter>0) {
            value.style.color = "green";
        } else if (counter<0) {
            value.style.color = "red";
        } else {
            value.style.color = "grey";
        }
            
        

        value.innerText = counter;  
    })
})