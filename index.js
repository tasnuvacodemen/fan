let startButton=document.getElementById('start')
let stopButton =document.getElementById('stop')
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

startButton.addEventListener('click',()=>{
    document.getElementById('fan').classList.add('image')
    playAudio()
})
stopButton.addEventListener('click',()=>{
    document.getElementById('fan').classList.remove('image')
    pauseAudio()
})
