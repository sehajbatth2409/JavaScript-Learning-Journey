let form=document.querySelector("form");
let inp=document.querySelectorAll("input");
let main = document.querySelector("#main");
let cards = document.querySelector("#cards");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
let card=document.createElement("div");
card.classList.add("card");
let profile=document.createElement("div");
profile.classList.add("profile");
let img=document.createElement("img");
img.setAttribute("src",inp[0].value);
profile.appendChild(img);
card.appendChild(profile);
cards.appendChild(card);
let h3=document.createElement("h3");
let h5=document.createElement("h5");
let p=document.createElement("p");
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);
h3.textContent=inp[1].value;
h5.textContent=inp[2].value;
p.textContent=inp[3].value;
inp.forEach(function(val){
    if(val.type !== "submit"){
        val.value="";
    }
});
});