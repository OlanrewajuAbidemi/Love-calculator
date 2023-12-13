function add(){a
    let iff= document.getElementById("result").innerHTML= Math.round(Math.random()*100)+"%"

    if (document.getElementById("first").value == "" && document.getElementById("snd").value == ""){
        document.getElementById("first").style.borderColor= "red"
        alert(" input your name")
        document.getElementById("result").innerHTML=""
    }
    if (document.getElementById("first").value == "" ){
        document.getElementById("first").style.borderColor= "red"
        alert(" input your name")
        document.getElementById("result").innerHTML=""
    }
    if (document.getElementById("snd").value == ""){
        document.getElementById("first").style.borderColor= "red"
        alert(" input your name")
        document.getElementById("result").innerHTML=""
    }

    if(iff >= 90 + "%"){
        document.getElementById("statement").innerHTML= "awww! Romeo & Juliet"
    }
    else if( iff >=70 +"%" && iff < 90 + "%"){
        document.getElementById("statement").innerHTML= "You can be a match"
    }
    else if( iff >=50 +"%" && iff < 70 + "%"){
        document.getElementById("statement").innerHTML= "YOU CAN BE A PERFECT MATCH IF YOU BOTH HAVE A GOOD PARENT"
    }
    else if(  iff < 50 + "%"){
        document.getElementById("statement").innerHTML= "You are not a match"
    }
  


}
