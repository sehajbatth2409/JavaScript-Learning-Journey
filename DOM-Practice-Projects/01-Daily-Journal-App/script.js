let text = document.querySelector("#text");
let count = document.querySelector("#count");
let remaining = document.querySelector("#remaining");
let fill = document.querySelector(".fill");

const limit = 300;

// Load saved journal
if(localStorage.getItem("journal")){
    text.value = localStorage.getItem("journal");
}

update();

text.addEventListener("input", function(){

    text.style.height = "auto";
    text.style.height = text.scrollHeight + "px";

    localStorage.setItem("journal", text.value);

    update();

});

function update(){

    let value = text.value.trim();
    let words = 0;

    if(value !== ""){
        words = value.split(/\s+/).length;
    }

    count.innerText = words;

    let left = limit - words;

    if(left >= 0){
        remaining.innerText = left + " words remaining";
    }
    else{
        remaining.innerText = Math.abs(left) + " words over limit";
    }

    let percent = (words / limit) * 100;

    if(percent > 100){
        percent = 100;
    }

    fill.style.width = percent + "%";

    count.classList.remove("warning","danger","success");
    remaining.classList.remove("warning","danger","success");
    fill.classList.remove("warning","danger","success");

    if(words >= 240 && words < 300){

        count.classList.add("warning");
        remaining.classList.add("warning");
        fill.classList.add("warning");

    }

    else if(words == 300){

        count.classList.add("success");
        remaining.classList.add("success");
        fill.classList.add("success");

        remaining.innerText = "Perfect! You reached the word limit.";

    }

    else if(words > 300){

        count.classList.add("danger");
        remaining.classList.add("danger");
        fill.classList.add("danger");

    }

}