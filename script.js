let btns= document.querySelectorAll(".btn");
let msg=document.querySelector(".msg");
let startBtn=document.querySelector(".start_btn");
let timer=document.querySelector("#timer");
let startPg =document.querySelector(".start_pg");
let popMsg=document.querySelector(".popup");
let exit=document.querySelector("#exit");
let conti=document.querySelector("#continue");
//let con=document.querySelector("")
let sec=0;
let min=0;
let id;


startBtn.classList.remove("hide");
startPg.classList.remove("hide");
 
    for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        console.log("hh");
       let cor=e.target.innerText;
       if(cor=='Delhi'){
       e.target.style.backgroundColor="green";
       e.target.style.Color="white";
      msg.classList.toggle("hide");
      clearInterval(id);
      disabled();
       
       }
       else{
        e.target.style.backgroundColor="Red";
        e.target.style.Color="white";


 }
 

       
    });
}



let disabled=()=>{
    for(let b of btns){
    b.disabled=true;
}
}

startBtn.addEventListener('click', ()=>{
    startBtn.classList.add("hide");
    popMsg.classList.toggle("hide");
    id= setInterval(()=>{
        sec++;
        if(sec==60){
            sec=0;
            min++;
            if(min == 1)
        {
            clearInterval(id);

        }    
        }

        let Sec=sec<10 ? `0${sec}` :sec;
        let Min=min<10 ? `0${min}` :min;

    timer.innerText=`${Min}:${Sec}`;
    
    

    },1000)
   
});

conti.addEventListener('click',()=>{
    startPg.classList.add("hide");
    popMsg.classList.toggle("hide");

   


});

exit.addEventListener('click',()=>{
    startBtn.classList.toggle("hide");
    popMsg.classList.toggle("hide");

    console.log("fd");

});
