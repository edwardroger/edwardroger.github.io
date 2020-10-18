//cau 6
var btnBlue = document.querySelector("div#sixth button.js-btn-blue")
var btnRed = document.querySelector("div#sixth button.js-btn-red")
var sixth = document.querySelector("div#sixth")
console.log(btnBlue,btnBlue,sixth)
btnBlue.addEventListener("click",function (){
    sixth.style.backgroundColor="blue"
})
btnRed.addEventListener("click",function (){
    sixth.style.backgroundColor="red"
})
//cau 7
var btnBlue = document.querySelector("div#seventh button.js-btn-blue")
var btnRed = document.querySelector("div#seventh button.js-btn-red")
var btnLavender=document.querySelector("div#seventh button.js-btn-lavender")
var btnBrown=document.querySelector("div#seventh button.js-btn-brown")
var seventh = document.querySelector("div#seventh")
console.log(btnBlue,btnBlue,sixth)
btnBlue.addEventListener("click",function (){
    seventh.style.backgroundColor="blue"
})
btnRed.addEventListener("click",function (){
    seventh.style.backgroundColor="red"
})
btnLavender.addEventListener("click",function (){
    seventh.style.backgroundColor="lavender"
})
btnBrown.addEventListener("click",function (){
    seventh.style.backgroundColor="brown"
})
//cau 8
var Dates = new Date();
document.title = Dates.getHours()+ ":"+Dates.getMinutes()+"-Hello"
//cau 9
function clock(){
    var Dates = new Date();
    var clock = document.querySelector("div#nineth div.js-doomsday-clock")
    var hours = Dates.getHours();
    var minute = Dates.getMinutes();
    var second = Dates.getSeconds();
    var milliseconds = Dates.getMilliseconds();
    if (milliseconds <10){
        milliseconds = "000"+milliseconds
    }else if (milliseconds < 100){
        milliseconds ="00"+milliseconds
    }else if (milliseconds< 1000 ){
        milliseconds ="0"+milliseconds
    }else if(second<10){
        second = "0"+second;
    }else if (minute<10){
        minute ="0"+minute;
    }else if (hours < 10){
        hours = "0"+hours;
    }
    clock.innerHTML = hours + ":" + minute + ":" + second +":"+milliseconds
}
setInterval(clock,1)
//cau 10
var btnShowMore = document.querySelector("div#tenth button.js-btn-showmore")
var result = document.querySelector("div#tenth div.js-textfield")
var onClick = 0;
btnShowMore.addEventListener("click",function (){
    onClick+=1;
    if (onClick %2 !==0){
        result.style.height="auto"
    }else {
        result.style.height="50px"
        btnShowMore.value.innerText="Show less"
    }

})
