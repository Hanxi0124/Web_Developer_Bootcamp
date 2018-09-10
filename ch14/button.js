var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var h1 = document.querySelector("h1");

button.addEventListener("click",function(){
    paragraph.textContent = "!";
});

h1.addEventListener("click",function(){
    alert("h1 was clicked!");
});

document.querySelector("ul").addEventListener("click",function(){
    console.log("Clikced ul");
});

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click",function(){
        this.style.color = "pink";
    });
}

button.addEventListener("click",changeText);

function changeText(){
    paragraph.textContent = "Some";
}