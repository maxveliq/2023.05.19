document.getElementById("addButton").addEventListener("click", addSquare);
const wrapper = document.getElementById("wrapper");
let counter = 1007;

function addSquare() {
    counter = counter -7;
    let square = document.createElement("div");

    if (counter % 5 === 0) {

        if (counter % 10 === 0) {
                square.className = "redBorder";
            } else {
                square.className = "circle";
            }

    } else {
        square.className = "square";
    }

    square.textContent = counter;
    wrapper.appendChild(square);
}