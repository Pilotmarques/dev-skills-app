// We're going to make a Dev Skills App
// We need for a user to type in a dev skill
// Then we will get the value of the skill
// We need to add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM


// State Variables
let $inputVal, $skillElement

// Event Listeners
$('button').on('click', getInputText)

// Functions
function getInputText(){
    $inputVal = $('input').val()
    $('input').val('')
    createElement($inputVal)
}

function createElement(str){
    $skillElement = $(`<li>${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element){
    $('section ul').append(element)
}




