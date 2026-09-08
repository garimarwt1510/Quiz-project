let btns= document.querySelectorAll(".btn");
let msg=document.querySelector(".msg");
let startBtn=document.querySelector(".start_btn");
let time=document.querySelector("#timer");
let startPg =document.querySelector(".start_pg");
let popMsg=document.querySelector(".popup");
let exit=document.querySelector("#exit");
let exit1=document.querySelector("#exit1");
let cnt=document.querySelector("#continue");
let ques=document.querySelector("#Question");
let score_msg=document.querySelector("#score");
let next=document.querySelector("#next");
let replay=document.querySelector("#replay");
let currentQ=0;
let currentO=0;
let sec=0;
let msec=0;
let id;
let score=0;


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
        options: ["1 bytes", "2 bytes", "0 bytes", "Depends on compiler only"],
        answer: "1 bytes"
    },
    {
        question: "Which feature allow the same function name with different parameter lists?",
        options: ["Overriding", "Encapsulation", "Overloading", "Abstraction"],
        answer: "Overloading"
    },
    {
        question: "What is the purpose of a virtual function?",
        options: ["Increase memory", "Compile-time checking", "Dyanmic memory alloction", "Runtime polymorphism"],
        answer: "Runtime polymorphism"
    },
    {
        question: "Which type of inheritance causes the 'Diamond Problem'?",
        options: ["Single Inheritance", "Multiple Inheritance", "Hierarchical Inheritance", "Multilevel Inheritance"],
        answer: "Multiple Inheritance"
    }
];


//start btn
startBtn.addEventListener('click', ()=>{
    startBtn.classList.add("hide");
    popMsg.classList.toggle("hide");
    
});

//continue btn
cnt.addEventListener('click',()=>{
    startPg.classList.add("hide");
    timer();
    store();
});

//question and option store
let store=()=>{
    if(currentQ < quizData.length){
        ques.innerText= quizData[currentQ].question;

for(let btn of btns){
    btn.innerText=quizData[currentQ].options[currentO];
    currentO ++;
}

}
else{
    clearInterval(id);
    msg.classList.remove("hide");
    score_msg.innerText=`Nice, you got ${score} out of 5`;
      }
   }

//game function
function game(){
for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        if(currentQ < quizData.length){
            let select=e.target.innerText;
            let ans=quizData[currentQ].answer;

        if(select==ans){
            e.target.style.backgroundColor="#91db6f";
            e.target.style.border="3px solid  #192a4a";
              score++;
        } 
          else{
            e.target.style.backgroundColor="#f34f4f";
          e.target.style.color="white";
            for(let i=0;i<4;i++){
                if(btns[i].innerText==ans){
                    btns[i].style.backgroundColor="#91db6f";
                  
                }
            }
        }
         setTimeout(()=>{
                e.target.style.backgroundColor="white";
                e.target.style.color="#192a4a";
                for(let btn of btns){
                    btn.style.backgroundColor="white";
                    btn.style.color="#192a4a";
                }
                currentO=0;
                currentQ++;
                store();
               
            },1000);
           }
        });
    }
}

game();

//time
function timer(){
    id= setInterval(()=>{
        msec++;
        if(msec==100){
            msec=0;
            sec++;
            if(sec == 60)
        {
            clearInterval(id);
            score.innerText="Time is Over!!";
            msg.classList.remove("hide");
        }    
      }
        let MSec=msec<10 ? `0${msec}` :msec;
        let Sec=sec<10 ? `0${sec}` :sec;
        time.innerText=`${Sec}:${MSec}`;
    
    },10);
 
}

exit.addEventListener('click',()=>{
    startBtn.classList.toggle("hide");
    popMsg.classList.toggle("hide");

});

exit1.addEventListener('click',()=>{
    clearInterval(id);
    startBtn.classList.remove("hide");
    popMsg.classList.toggle("hide");
    msg.classList.toggle("hide");
    startPg.classList.remove("hide");
    msec=0;  
    sec=0;
    currentO=0;
    currentQ=0;
    score=0;
 
});

replay.addEventListener("click",()=>{
    clearInterval(id);
    msg.classList.toggle("hide");
    startPg.classList.add("hide");
    msec=0;  
    sec=0;
    currentO=0;
    currentQ=0;
    score=0;
    timer();
    store();
});




