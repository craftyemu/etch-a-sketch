const container = document.querySelector(".container");
const create = document.querySelector(".create");

function makeGrid() {
    container.textContent = "";
    var n = prompt("How many rows and columns? (Must be between 1-100)");

    if (n > 100 || n < 1) {
        alert("Please select a number between 1 and 100");
    } else if (isNaN(n)) {
        alert("Please select a number between 1 and 100");
    } else { 
        for (let i = 0; i < n; i++) {
        var column = document.createElement("div");
        column.className = "column"
        container.appendChild(column);

        for (let i = 0; i < n; i++) {
            var square = document.createElement("div");
            square.className = "square";
            square.addEventListener('mouseover', changeColor);
            column.appendChild(square);
            }
        }
    }
}

create.addEventListener("click", makeGrid);

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}