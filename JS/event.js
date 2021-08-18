
function makeRed(){
    document.body.style.backgroundColor = "red";
}

// make blue
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//handle even using anonymous function
const greenButton = document.getElementById('make-green-button');

// anonymous function with arrow function
greenButton.onclick = () =>{
    document.body.style.backgroundColor = 'green';
    }


//handle event using eventListener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}

// handle event using add eventlistener
const hotPickButton = document.getElementById('make-hotpink');

hotPickButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('make-lightBlue').addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'lightblue';
})
       