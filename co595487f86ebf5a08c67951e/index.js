/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let convertBtn= document.getElementById("convert-btn")
let inputEl=document.getElementById("input-el")
let p1=document.getElementById("metric-1")
let p2=document.getElementById("metric-2")
let p3=document.getElementById("metric-3")
let inputValue=document.getElementById("input-el").value
let a
convertBtn.addEventListener("click",function(){
    let inputValue=document.getElementById("input-el").value
    meters(inputValue)
    liters(inputValue)
    kilograms(inputValue)
})


function meters(Value){
    p1.textContent=`${Value} meters =  ${Value * 3.281}   feet | ${Value} feet =  ${(Value / 3.281).toFixed(3)} feet  `
}

function liters(Value){
    p2.textContent=`${Value} liters =  ${(Value * 0.264).toFixed(3)}   galoons | ${Value} galoons =  ${(Value / 0.264).toFixed(3)} liters  `
}

function kilograms(Value){
    p3.textContent=`${Value} kilograms =  ${(Value * 2.204).toFixed(3)}   pounds | ${Value} pounds=  ${(Value / 2.204).toFixed(3)} kilograms  `
}