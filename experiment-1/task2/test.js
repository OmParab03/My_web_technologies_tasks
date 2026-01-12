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

    if(m>=90){
        document.writeln("<h1>A grade.😀</h1>")
    }
    else if(m<90 & m>=80){
        document.writeln("<h1>B grade.😄</h1>")
    }
    else if(m<80 & m>=70){
        document.writeln("<h1>C grade.😊</h1>")
    }
    else if(m<70 & m>=60){
        document.writeln("<h1>D grade.😐</h1>")
    }
    else if(m<60 & m>=50){
        document.writeln("<h1>E grade.😑</h1>")
    }
    else{
        document.writeln("<h1>F grade🤧</h1>")
    }
}