// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('firstname');
//const button = document.getElementById('color1')
//const button3 = document.getElementById('pink-button')
//const button4 = document.getElementById('green')




button.addEventListener ('click', ()=>{
    let nameValue = nameInput.value;
    firstName.textContent = nameValue; });


//button2.addEventListener('click', ()=>{
 // let bloo = color(blue) 
 // let header = document.getElementByName('Header')
 //let footer = document.getElementsByName('Footer')
  //header.style.background = blue
  //footer.style.background


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
