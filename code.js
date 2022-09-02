const items = document.getElementsByClassName("carousel-item")
let slidePosition = 0
items[slidePosition].style.display ="visible"
console.log(items[slidePosition])
const totaSlides = items.length
document.getElementById("carousel-button-next").addEventListener("click",function(){
   if (slidePosition <2){
        slidePosition += 1
    }else{slidePosition =0}
    for (let i =0; i<items.length;i++ ){
        if(items[i])=== items[slidePosition]){
            items[i].style.display = "visible"
        }else{items[i].style.display = "none"}
    }
})
document.getElementById("carousel-button-prev").addEventListener("click",function(){
    if (slidePosition > 0){slidePosition -= 1}
    else{slidePosition = 2}
    for (let i =0; i<items.length;i==){
        if(items[i]=== items[slidePosition]){
            items[i].style.display = "visible"
        }else{
            items[i].style.display = "none"
        }
    }
})