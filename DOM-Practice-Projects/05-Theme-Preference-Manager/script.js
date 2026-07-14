let body=document.querySelector("body");
function setMode (){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}
else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
}
setMode();

if(localStorage.getItem("theme")){
    document.body.classList.remove("dark", "light");
    document.body.classList.add(localStorage.getItem("theme"));
}
else{
    setMode();
}

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    if(body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
    else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme","dark");
    }
})
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
   if(!localStorage.getItem("theme")){
    setMode();
   }
})