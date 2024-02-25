function setup(){
    canvas=createCanvas(900,600)
    
}
x=0
y=0
drawcircle=""
drawrec=""
api=window.webkitSpeechRecognition
rec=new api()
function start(){
    rec.start()
    document.getElementById("status").innerHTML="Listening Pls Speak"
}
rec.onresult=function(e){
    myspeech=e.results[0][0].transcript
    document.getElementById("status").innerHTML="U said "+myspeech
    if (myspeech=="circle"){
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Drawing A circle"
        drawcircle="jordans"
    }
    if (myspeech=="rectangle"){
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Drawing A rectangle"
        drawrec="jordans"
    }
}



function draw(){
    if(drawcircle=="jordans"){
        circle(x,y,100)
        document.getElementById("status").innerHTML="Circle completed"
        drawcircle=""

    }
    if(drawrec=="jordans"){
        rect(x,y,100,150)
        document.getElementById("status").innerHTML="rectangle completed"
        drawrec=""
        
    }
}