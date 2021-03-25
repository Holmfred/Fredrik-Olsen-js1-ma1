const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

var cat = {
    complain: function(){
        console.log("Meow")
    }
}

cat.complain();

//Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red"
};

//Question 6

var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function function1(list) {
    for(var i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}

function1(cats);

//Question 8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let catAge = "Age Unknown";

        if(cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
//function createCats(cats);