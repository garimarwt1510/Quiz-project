let btns= document.querySelectorAll(".btn");
let msg=document.querySelector(".msg");
let startBtn=document.querySelector(".start_btn");
let timer=document.querySelector("#timer");
let startPg =document.querySelector(".start_pg");
let popMsg=document.querySelector(".popup");
let exit=document.querySelector("#exit");
let cnt=document.querySelector("#continue");
let ques=document.querySelector("#Question")
let currentQ=0;
let currentO=0;
let sec=0;
let msec=0;
let id;


startBtn.classList.remove("hide");
startPg.classList.remove("hide");
 
//quiz question  and option
const quizData = [
    {
        question: "Which function is the starting point of every C++ program ?",
        options: ["start()", "run()", "main()", "program()"],
        answer: "main()"
    },
    {
        question: "What is the size of an empty class in C++?",
        options: ["0 bytes", "1 bytes", "2 bytes", "Depends on compiler only"],
        answer: "1 bytes"
    },
    {
        question: "Which feature allow the same function name with different parameter lists?",
        options: ["Overriding", "Overloading", "Encapsulation", "Abstraction"],
        answer: "Overloading"
    },
    {
        question: "What is the purpose of a virtual function?",
        options: ["Increase memory", "Runtime polymorphism", "Compile-time checking", "Dyanmic memory alloction"],
        answer: "Runtime polymorphism"
    },
    {
        question: "Which type of inheritance causes the 'Diamond Problem'?",
        options: ["Single Inheritance", "Multiple Inheritance", "Hierarchical Inheritance", "Multilevel Inheritance"],
        answer: "Multiple Inheritance"
    }
];

let storeOp=()=>{
for(let btn of btns){
    btn.innerText=quizData[currentQ].options[currentO];
    currentO ++;
}
}
storeOp();

for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        let select=e.target.innerText;

        setTimeout(()=>{
            if(select==quizData[currentQ].answer){
                e.target.style.backgroundColor="green";
                  e.target.style.color="white";
                   clearInterval(id);
                  console.log(select);
      
              }
      

        },100);
        
                e.target.style.backgroundColor="white";
        e.target.style.color="#192a4a";
        currentQ++;
        quest();
        currentO=0;
        storeOp();
       


    });
}

  

//start btn
startBtn.addEventListener('click', ()=>{
    startBtn.classList.add("hide");
    popMsg.classList.toggle("hide");
    
});

cnt.addEventListener('click',()=>{
    startPg.classList.add("hide");
    id= setInterval(()=>{
        msec++;
        if(msec==100){
            msec=0;
            sec++;
            if(sec == 20)
        {
            clearInterval(id);

        }    
        }
        let MSec=msec<10 ? `0${msec}` :msec;
        let Sec=sec<10 ? `0${sec}` :sec;

    timer.innerText=`${Sec}:${MSec}`;
    
    },10)
   

});

exit.addEventListener('click',()=>{
    startBtn.classList.toggle("hide");
    popMsg.classList.toggle("hide");

});

let quest=()=>{
ques.innerText= quizData[currentQ].question;
}
quest();
