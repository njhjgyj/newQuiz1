"use strict";

let userName = prompt("Whats your name is: ", "Boost").trim();

let quizobject = [

    {

        Questions: ` Q1: What is the value of result? <br> const array = [1, 2, 3]; <br> const result = array[3]; `,
        Answers: " a) undefined  ",
        Options: [
            " a) undefined  ",
            " b) null  ",
            " c) 3  ",
            " d) throw a SyntaxError  "
        ]

    },

    {

        Questions: ` Q2: What is the value of result? <br> const obj = Object.assign({
            name: "javascript"
        }, {
            name: "ECMAScript"
        }, {
            name: "LiveScript"
        }); <br> const result = obj.name;  `,

        Answers: " c) LiveScript  ",
        Options: [
            " a) ECMAScript ",
            " b) javascript  ",
            " c) LiveScript  ",
            " d) undefined  "
        ]
    },

    {

        Questions: ` Q3: What is the value of result? <br> const array = [1, 2, 3, 5]; <br> const result = array.indexOf(3); `,
        Answers: " d) 2  ",
        Options: [
            " a) 3 ",
            " b) -1  ",
            " c) 5  ",
            " d) 2  "
        ]

    },

    {

        Questions: " Q4: Which of these is the same as <b> result += value? </b>  ",
        Answers: " d) result = result + value  ",
        Options: [
            " a) result = value++  ",
            " b) result = value  ",
            " c) result = value + value  ",
            " d) result = result + value  "
        ]
    },

    {

        Questions: ` Q5: What is the value of result <br> const o = {
            name: "Brendan"
        }; <br>
        const s = JSON.parse(JSON.stringify(o)); <br>
        const result = s === o;  `,
        Answers: " b) false  ",
        Options: [
            " a) true  ",
            " b) false  ",
            " c) throw a SyntaxError  ",
            " d) undefined  "
        ]

    },

// {

//     Questions: " Q6: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q7: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q8: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q9: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q10: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q11: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q12: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q13: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q14: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q15: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q16: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q17: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " 18: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

// {

//     Questions: " Q19: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]

// },

// {

//     Questions: " Q20: What is the full form of COC, COC is game?  ",
//     Answers: " Clash Of Clans",
//     Options: [
//         " a) Clash Of Clouds ",
//         " b) Cloud Of Clash  ",
//         " c) Clash Of Clans  ",
//         " d) Crack In Cloud  "
//     ]
// },

];

let geth3TagQuestions = document.getElementById('h3TagForQuestions');

let getpTagOptions = document.getElementsByClassName('pTagOptions');

let getMainDiv = document.getElementById('mainDiv');

let getNextButton = document.getElementById('nextButton');

let getNewClass = document.getElementsByClassName('newClass');

let quesCount = 0;
let score = 0;

let getTimerSpan = document.getElementById('timerSpan');

let setTimer = 50;

let newSetTimer;

function seTimeFunc(){

    newSetTimer = setInterval(function(){

        getTimerSpan.innerHTML = setTimer;

        setTimer--;

    }, 1000);

        setTimeout(function(){

            clearInterval(newSetTimer);

            if(setTimer === 0){

                document.write(`<h3> ${userName} You out of time sorry You Scored ${score}/${quizobject.length} your time has beed ended </h3>

        <button id="timeoverres" onclick="location.reload()"> Restart </button>`);
        
            };

        }, 50999.5);

        

}


questionsAndOptions();
seTimeFunc();



function questionsAndOptions(){
    geth3TagQuestions.innerHTML = quizobject[quesCount].Questions;
    for(let i = 0; i < getpTagOptions.length; i++){
        getpTagOptions[i].innerHTML = quizobject[quesCount].Options[i];
        getpTagOptions[i].innerHTML = quizobject[quesCount].Options[i];
        getpTagOptions[i].innerHTML = quizobject[quesCount].Options[i];
        getpTagOptions[i].innerHTML = quizobject[quesCount].Options[i];
    };
    
    addpTagsClass();
    
};

let store = quesCount;

function addpTagsClass(){

    for(let i = 0; i < getpTagOptions.length; i++){

        getpTagOptions[i].addEventListener('click', function(){

            removepTagClass();

            getpTagOptions[i].classList.add('newClass');

            getNextButton.disabled = false;

            let audio = new Audio("Click.mp3");
            audio.play();

        });
    };
};

function removepTagClass(){

    for(let i = 0; i < getpTagOptions.length; i++){

    getpTagOptions[i].classList.remove('newClass');

    };
};


function checkAnswers(){

    for (let i = 0; i < getNewClass.length; i++) {

        if(getNewClass[i].innerHTML === quizobject[quesCount].Answers){

            score += 1;    // 4.2

            console.log(score.toFixed(0));  

        };
    };

    
}

function nextFunction(){

    checkAnswers();

    quesCount++;

    removepTagClass();

    getNextButton.disabled = true;

    if(quesCount < quizobject.length){

    questionsAndOptions();

    }else{

        document.write(`${userName} Your quiz is finished and you scored ${score} out of ${quizobject.length} <br><br> <button id="timeoverres" onclick="window.location.reload()"> Restart </button>`);

        setTimeout(function(){
            clearInterval(newSetTimer);
        }, 100);

    };

    if (score == 5) {
        setTimeout( () => {
            alert("Congratulations");
        }, 2000);
    
    }

};