const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const question = document.getElementById("quiz-question");
console.log(question)
console.log(question.textContent);
const option_a = document.getElementById("text_option-a");
const option_b = document.getElementById("text_option-b");
const option_c = document.getElementById("text_option-c");
const option_d = document.getElementById("text_option-d");

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const Submit = document.getElementById("Submit");
let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

Submit.addEventListener('click',()=>{
const checkedAns = document.querySelector('input[type="radio"]:checked')
console.log(checkedAns);
// console.log(checkedAns.nextElementSibling.textContent);
if(checkedAns===null){
alert("please select an answer");
}
// else{
//     if(checkedAns.nextElementSibling.textContent===quiz(currentQuestion).answer){
//         score++;
//     }
//     // checkedAns.checked = false;
//     currentQuestion++;
//     if(currentQuestion < quiz.length){
//         question.textContent = quiz[currentQuestion].question;
// option_a.textContent = quiz[currentQuestion].ans1text;
// option_b.textContent = quiz[currentQuestion].ans2text;
// option_c.textContent = quiz[currentQuestion].ans3text;
// option_d.textContent = quiz[currentQuestion].ans4text;
// checkedAns.checked = false
//     } 
//     else{
//         alert("Quiz Over and your score is:" +score + " out of " +quiz.length);
//         location.reload();
//     }
// }
// });


else{
    if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
        score++;
    }

    currentQuestion++;
    if( currentQuestion < quiz.length){
        question.textContent = quiz[currentQuestion].question;
        option_a.textContent = quiz[currentQuestion].ans1text;
        option_b.textContent = quiz[currentQuestion].ans2text;
        option_c.textContent = quiz[currentQuestion].ans3text;
        option_d.textContent = quiz[currentQuestion].ans4text;
        checkedAns.checked = false;
    }else{
        alert("Your score is " + score + " out of " + quiz.length);
        location.reload();
    }

}
});