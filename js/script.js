let box1=document.querySelector(".box1")
let input1=document.querySelector(".box1 input")
let error1=document.querySelector(".box1 span")
let button1=document.querySelector(".box1 button")

let box2=document.querySelector(".box2")
let heading2=document.querySelector(".box2 h2")
let input2=document.querySelector(".box2 input")
let error2=document.querySelector(".box2 span")
let button2=document.querySelector(".box2 button")

let box3=document.querySelector(".box3")
let input3=document.querySelector(".box3 input")
let error3=document.querySelector(".box3 span")
let button3=document.querySelector(".box3 button")


let box4=document.querySelector(".box4")
let heading4=document.querySelector(".box4 h2")
let input4=document.querySelector(".box4 input")
let error4=document.querySelector(".box4 span")
let button4=document.querySelector(".box4 button")
let life=document.querySelector(".box4 p")
chance=5

let box5=document.querySelector(".box5")
let pl1Number=document.querySelector(".box5 p")
let result=document.querySelector(".box5 h2")

button1.addEventListener("click",function(){
   if(input1.value==""){
    error1.innerHTML="please enter a name"
   }else{
    error1.innerHTML=""
    box1.style.display="none"
    box2.style.display="flex"
    heading2.innerHTML=input1.value
   }
})

button2.addEventListener("click",function(){
    if(input2.value== ""){
        error2.innerHTML="please Enter a number between 0 to 9"
    }else if(input2.value>=0 && input2.value<=9){
        error2.innerHTML=""
        box2.style.display="none"
        box3.style.display="flex"
    }else{
        error2.innerHTML="please Enter a number between 0 to 9" 
    }

})

button3.addEventListener("click",function(){
    if(input3.value== ""){
        error3.innerHTML ="please enter your name"
    }else{
        error3.innerHTML =""
        box3.style.display = "none"
        box4.style.display = "flex"
        heading4.innerHTML = input3.value
    }
})

button4.addEventListener("click",function(){
    if(input4.value =""){
        error4.innerHTML = "Guess the number between 0 to 9"
    }else{
        error4.innerHTML = "" 
        if(input2.value == input4.value){
            box4.style.display = "none"
            box5.style.display = "flex"
            result.innerHTML = `player ${input3.value} won the game`
           
        }else{
           chance--
           life.innerHTML = `chance left ${chance}`
           if(chance == 0){
            box4.style.display = "none"
            box5.style.display = "flex"
             result.innerHTML = `player ${input1.value} won the game`
           
           
            

           }
        }

    }
})