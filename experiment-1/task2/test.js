// let a=10;
// document.writeln(a);


// let b="Omkar"
// {
//     let b="Omkar Parab"
//     document.writeln("<br>"+b)
// }
// document.writeln("<br>"+b)

function marks(){
    const mark=document.getElementById("mark")
    let m=mark.value
    const outputdiv=document.getElementById("outputdiv")
    if(m){

        if(m>=90){
            outputdiv.innerHTML="<span><h1>A grade.😀</h1></span>"
        }
        else if(m<90 & m>=80){
            outputdiv.innerHTML="<span><h1>B grade.😄</h1></span>"
        }
        else if(m<80 & m>=70){
            outputdiv.innerHTML="<span><h1>C grade.😊</h1></span>"
        }
        else if(m<70 & m>=60){
            outputdiv.innerHTML="<span><h1>D grade.😐</h1></span>"
        }
        else if(m<60 & m>=50){
            outputdiv.innerHTML="<span><h1>E grade.😑</h1></span>"
        }
        else{
            outputdiv.innerHTML="<span><h1>F grade🤧</h1></span>"
        }
    }else{
        outputdiv.innerHTML="<span><h1>Please enter valid marks.😶‍🌫️</h1></span>"
    }
}


function checkEvenOdd(){
    const number=document.getElementById("number")
    let n=number.value
    const outputdiv=document.getElementById("outputdiv")
    if(n){
    if(n%2===0){
        outputdiv.innerHTML="<span><h1>Even Number.😀</h1></span>"

    }
    else{
        outputdiv.innerHTML="<span><h1>Odd Number.😄</h1></span>"
    }
    }else{
        outputdiv.innerHTML="<span><h1>Please enter a valid number.😶‍🌫️</h1></span>"} 
}

