let v1 = 0
let v2 = 0
let R = 0
let opr = null
numbr = ""
str =""

function num_get(btn)
{
if (opr == null){
    
    numbr = numbr+btn.textContent
    v1 = numbr
    document.getElementById("num").textContent = v1
    
    // document.getElementById("debug").textContent = v1
}else{
    numbr = numbr+btn.textContent
    v2 = numbr
    document.getElementById("num").textContent = v2
    
}
    
}

function debug(){
    display = "opr: "+opr +"---- V1: " +v1+ "---- v2: "+ v2 +"---- R: "+R+ "\nnumbr: "+numbr 
    document.getElementById("debug").textContent = display
}

function operator(btn){
    opr = btn.textContent
    numbr = ""
    document.getElementById("op").textContent = opr
}

function clr(){
    v1 = 0
    v2 = 0
    R = 0
    opr = null
    numbr = ""
    document.getElementById("num").textContent = "0."
    document.getElementById("op").textContent = null
}
// function cut(){
//     str = 
// }

function calc(){
    v1 = Number(v1)
    v2 = Number(v2)
    switch(opr){
        case "+":
            R = v1+v2
            break;

        case "-":
            R = v1-v2
            break;
        case "x":
            R = v1*v2
            break;
        case "/":
            R = v1/v2
            break;
        case "%":
            R=100*v1/v2
    }
    document.getElementById("num").textContent = R
    document.getElementById("op").textContent = ""
    v1 = R
    v2 = null
    opr = null
    numbr = ""
}

function backspace(){
    if(opr == null && v2 == 0){
        e = v1.length
        v1 = v1.slice(0,e-1)
        numbr = v1
        document.getElementById("num").textContent = v1
    }else{
        e = v2.length
        v2 = v2.slice(0,e-1)
        numbr = v2
        document.getElementById("num").textContent = v2
    }
}

// document.getElementById("keypad").addEventListener("click", (e) => {
//   const btn = e.target.closest(".btn-num");   // ignore clicks between buttons
//   if (!btn) return;
//   display.textContent += btn.textContent;     // append, like a real calculator
// });