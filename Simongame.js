let comarr=[];
let userarr=[];
let start=false;
let level=0;
let bot=["red","Orange","Green","violet"];
let h3=document.querySelector("h3");
document.addEventListener("keypress", function() {
    //console.log("Game start");
    if(start==false){
        console.log("Game start");
        start=true;
        
    }
    
    
    levelup();



    
});

function levelup() {
    level++;
    userarr=[];
    
    h3.innerText=`Level ${level}`;

    let randidx= Math.floor(Math.random()*4);
    let randcolour=bot[randidx];
    //console.log(randcolour);
    comarr.push(randcolour);
    console.log(comarr);
    let btnoye= document.querySelector(`.${randcolour}`);
    gamebuttonflash(btnoye);

    
    
}


//function check comarr and user arr

function checkAns(idx) {
    //console.log("Level", level);
    //let idx= level-1;
    if(comarr[idx]===userarr[idx]){
        console.log("Matched and same");
        if(userarr.length==comarr.length){
            setTimeout(levelup(), 5000);
        }
    }else{
        
        h3.innerHTML=`Game over !...<b>Your Score is ${level} &#9996 </b> <br>Mismatched sequence.....<br>Please press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },1500);
        resetfunc();
    }
}

function gamebuttonflash(params) {
    params.classList.add("flash");
    setTimeout(() => {
        params.classList.remove("flash");
        //console.log(params);

    }, 250);

    
}


// when we click the button button will flash

let allbutton=document.querySelectorAll(".Divy");
for(eabut of allbutton){
    eabut.addEventListener("click",buttonclicks);
}


function buttonclicks() {
    console.log(this);
    let btons= this;
    let usercolour=btons.getAttribute("id");
    userarr.push(usercolour);
    console.log(userarr);
    userbuttonflash(btons);

    checkAns(userarr.length-1);
    
}


function userbuttonflash(params) {
    params.classList.add("userflash");
    console.log("Button was pressed");
    setTimeout(() => {
        params.classList.remove("userflash");
        //console.log(params);

    }, 250);

    
}


function resetfunc() {
    level=0;
    userarr=[];
    comarr=[];
    start=false;
    
}