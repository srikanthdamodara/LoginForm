let timerEl=document.getElementById('time');

let resetBtn=document.getElementById('reset');
let startBtn=document.getElementById('start');
let stopBtn=document.getElementById('stop');

let interval;

let timerElValue=parseInt(timerEl.textContent);
function start(){
    

    timerElValue-=1;
    timerEl.textContent=timerElValue;
    if(parseInt(timerEl.textContent)===0){
        clearInterval(interval)
        timerEl.textContent="Clock stopped";
        
    }
   
    

    

}



startBtn.onclick=function(){
   
  
   interval=setInterval(start,1000);

   
   



};


stopBtn.onclick=function(){
   

    clearInterval(interval)

    

    
}


resetBtn.onclick=function(){
    
   
    
    timerEl.textContent="Time has reset"
   
    clearInterval(interval);
    timerElValue=10;
  
   
}

