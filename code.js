const container = document.querySelector(".container");

function makeSquares() {
    var n = prompt("How many squares?");

    for (let i = 0; i < n; i++) {
        var square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

//function getRandomColor() {
  //  var letters = "0123456789ABCDEF";
    //var color = "#";
    //for (var i = 0; i < 6; i++) {
      //color += letters[Math.floor(Math.random() * 16)];
    //}
    //return color;
  //}

  makeSquares();