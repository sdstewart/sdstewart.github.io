function howdy(){
    var inputValue = prompt("Please enter your name: ");
    alert("Howdy "+inputValue);
}

function conditional(){
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18){
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}

function spam(){
    var currentHour = new Date().getHours();
    for (i = 0; i < currentHour; i++){
        alert("SPAM")
    }
}

function evalNumber(parameters){
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue) || inputValue > 99999 || inputValue % 1 != 0){
        alert(inputValue + " is not a valid number.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number")
    } else {
        alert(inputValue + " is an odd number")
    } 
}

function changeTitle(){
    let selectedElement=document.getElementById("myName");
    var inputValue = prompt("Please enter your name: ");
    console.log(selectedElement);
    selectedElement.innerText=inputValue;
}

function getMinute(){
    let selectedElement=document.getElementById("minute");
    var currentMinute = new Date().getMinutes();
    console.log(selectedElement);
    selectedElement.innerText="The current Minute is: "+ currentMinute
}

function removeImage(){
    document.getElementById("image").style.display = "none";
}
