// We're going to make a Dev Skills App
// We need for a user to type in a dev skill
// Then we will get the value of the skill
// We need to add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM
// We need to add a remove Skill Feature
// Add a delete button - span tag with an X as it's content
// Add a function that will pluck the bad boy from the DOM


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
    $skillElement = $(`<li><span>X</span> ${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element){
    $('section ul').append(element)
    $('span').on('click', removeSkill)
}

function removeSkill(evt){
    $(evt.target).parent().remove()
}