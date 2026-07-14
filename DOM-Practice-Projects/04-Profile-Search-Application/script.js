let cards = document.querySelector("#cards");
let input = document.querySelector("#search");
let users = [
    {
        name: "Murtisam",
        pic: "https://i.pinimg.com/1200x/e2/7a/cf/e27acfbeb5f89d53d6e2259347a03ea1.jpg",
        bio: "Passionate web developer who enjoys building responsive and user-friendly websites."
    },
    {
        name: "Ananya Verma",
        pic: "https://i.pinimg.com/736x/7b/fd/4e/7bfd4ee5060ccfe40fa3fdabdb750163.jpg",
        bio: "Computer science student with a keen interest in UI/UX design and frontend development."
    },
    {
        name: "Kamiyar",
        pic: "https://i.pinimg.com/736x/92/3d/84/923d84e4100f1de34b040dc3dce912ff.jpg",
        bio: "Java developer who loves solving DSA problems and creating efficient applications."
    },
    {
        name: "Priya Nair",
        pic: "https://i.pinimg.com/control1/736x/ee/f9/f6/eef9f65a4ac5206daf4c515a2be91aa4.jpg",
        bio: "Creative designer and frontend enthusiast focused on clean, modern web experiences."
    },
    {
        name: "Sneha Oberoi",
        pic: "https://i.pinimg.com/1200x/b9/53/a7/b953a7ee3d49590f453647fcffe1a5d5.jpg",
        bio: "Full-stack developer exploring React, Node.js, and cloud technologies."
    }
];


function showUsers(arr){
arr.forEach(function(user){
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.setAttribute("src", user.pic);

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let h2 = document.createElement("h2");
    h2.textContent = user.name;

    let p = document.createElement("p");
    p.textContent = user.bio;

    overlay.appendChild(h2);
    overlay.appendChild(p);

    card.appendChild(img);
    card.appendChild(overlay);

    cards.appendChild(card);
})
}
showUsers(users);


input.addEventListener("input",function(){
cards.innerHTML="";
let filter=users.filter(function(user){
    return user.name.startsWith(input.value);
})

showUsers(filter);});