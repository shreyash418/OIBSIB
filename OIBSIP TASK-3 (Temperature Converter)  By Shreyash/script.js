const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit"),
kelvin = document.querySelector("#kelvin");
window.addEventListener("load",() => celsius.focus());

    
   celsius.addEventListener("input",()=>{
    fahrenheit.value = ((celsius.value*9)/5 +32).toFixed(2),
    kelvin.value = ((celsius.value*1)/1 +273.15).toFixed(2);
    // clear fahrenheit input when celsius input is empty
    if(!celsius.value) fahrenheit.value="" , kelvin.value="";
});

fahrenheit.addEventListener("input",()=>{
    celsius.value = (((fahrenheit.value -32)*5) /9).toFixed(2);
    kelvin.value = ((celsius.value*1)/1 +273.15).toFixed(2);
    if(!fahrenheit.value) celsius.value="",kelvin.value="" ;
});
kelvin.addEventListener("input",()=>{

    celsius.value = ((kelvin.value*1) -273.15 ).toFixed(2),
    fahrenheit.value = ((celsius.value*9)/5 +32).toFixed(2);
    if(!kelvin.value) celsius.value="",fahrenheit.value="";
});
function ClearFields() {

    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    
}

    
    

//covert fahrenhite to celsius
/* Kelvin to Celcius and Fahrenheit */
