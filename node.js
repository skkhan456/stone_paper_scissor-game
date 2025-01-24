let images=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");

// this variable are used to store the count
let comp_score=0;
let user_score=0;
let user_para=document.querySelector(".cnt");
let comp_para=document.querySelector(".compcnt");

images.forEach((boxes) => {
    boxes.addEventListener('click',()=>{
        console.log('You clicked this!');
        let userchoice=boxes.getAttribute("id");
        console.log('user choice ',userchoice);
        playgame(userchoice);
    })
});



// play game 
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    console.log('comp choice ',compchoice);

    if(userchoice===compchoice){
        msg.innerHTML="Game draw.play again"; 
        msg.style.backgroundColor="blue";

    }
    else{
        let userwinner=true;
        if(userchoice==="rock"){
            userwinner=compchoice==="paper"?false:true;
           
        }else if(userchoice==="paper"){
            userwinner=compchoice==="scissor"?false:true;
            
        }else{
            userwinner=compchoice==="rock"?false:true;
            
        }
        showwinner(userwinner,compchoice,userchoice);
    }
}

// function to genrate computer choices
const gencompchoice=()=>{
    // use random variable to generate choices of comp.
    const choices=["rock","paper","scissor"];

    const options=Math.floor(Math.random()*3);
    return choices[options];
}

let showwinner=(userwinner,compchoice,userchoice)=>{
    if(userwinner){
        user_score++;
        user_para.innerHTML=user_score;
        msg.innerHTML=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        comp_para.innerHTML=comp_score;
        msg.innerHTML=`Computer win! Comp ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="yellow";
    }
    
}


