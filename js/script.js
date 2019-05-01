// We are going to make a Dev Skills App
// We need for a user to type in a dev skill
// Then we will get the value of the skill
// We need to add functionality to the button so that we get the value
// We will build a dom element using that value
// Then we will add that element to the DOM


// state Variables
let $inputVal

// Event Listeners
$('button').on('click', getInputText)

//Functions
function getInputText(){
    alert('Button Clicked')
}