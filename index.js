/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convBtn.addEventListener("click", convert)

function convert(){
    const data = inputEl.value
    
    const oneMeterToFeet = 3.28084 
    const oneLiterToGallons = 0.264172
    const oneKiloToPounds = 2.20462
    
    const meterToFeet = data * oneMeterToFeet
    const feetToMeter = data / oneMeterToFeet
    
    const literToGallons = data * oneLiterToGallons
    const gallonsToLiter = data / oneLiterToGallons
    
    const kiloToPounds = data * oneKiloToPounds
    const poundsToKilo = data / oneKiloToPounds
    
    lengthEl.textContent = `${data} meters = ${meterToFeet.toFixed(3)} feet | ${data} feet = ${feetToMeter.toFixed(3)} meters`
    
    volumeEl.textContent = `${data} liters = ${literToGallons.toFixed(3)} gallons | ${data} gallons = ${gallonsToLiter.toFixed(3)} liters`
    
    massEl.textContent = `${data} kilos = ${kiloToPounds.toFixed(3)} pounds | ${data} pounds = ${poundsToKilo.toFixed(3)} kilos`
}