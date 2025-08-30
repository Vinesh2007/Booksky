// Open popup
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
var openButton = document.getElementById("addButton"); // 'Add Book' button

openButton.addEventListener("click", function () {
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
});

// Cancel button
var cancel = document.getElementById("cancel-button");
cancel.addEventListener("click", function (event) {
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

// Submit new book
var submitButton = document.getElementById("add-button"); // Button inside form/popup
var container = document.querySelector(".container");      // Make sure this matches your HTML
var bookname = document.getElementById("book-name");
var authorname = document.getElementById("author-name");
var description = document.getElementById("text-area");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book1");
    div.innerHTML = `
        <h2>${bookname.value}</h2>
        <h5>${authorname.value}</h5>
        <p>${description.value}</p>
        <button id="btn" onclick="deletebook(event)">Delete</button>   
        `;

    container.append(div);
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

function deletebook(event)
{
     event.target.parentElement.remove()
}