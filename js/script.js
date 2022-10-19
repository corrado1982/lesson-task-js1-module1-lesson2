//Question 1

const h3select = document.querySelector("h3");

h3select.innerHTML = "Hello";

//Question 2

const h4select = document.querySelectorAll("h4");

for (var i = 0; i < h4select.length; i++) {
    h4select[i].style.marginBottom = "-20px";
}

//Question 3

h4select[1].style.backgroundColor = "red";

//Question 4

const paragraphSelector = document.querySelectorAll("p");

for (var i = 0; i < paragraphSelector.length; i++) {
    paragraphSelector[0].style.fontSize = "24px";
    paragraphSelector[0].style.color = "blue";
}

//Question 5

let thirdParagraph = paragraphSelector[2]
    thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";

//Question 6

const addParagraph = document.querySelector(".content");
    addParagraph.innerHTML += "<p> Added Paragraph </p>";
    
//Question 7

const addClassToP = document.querySelectorAll(".content p");

for (let i = 0; i < addClassToP.length; i++ ) {
    addClassToP[i].classList.add("content-item");
}


//Question 8

    const selectUl = document.querySelector("#services");

    selectUl.innerHTML = "<li> New List </li>" + selectUl.innerHTML;


//Question 9 

selectUl.classList.remove("service-list");

//Question 10

const toBeHiden = document.querySelector("#hide");

toBeHiden.style.display = "none";
