function addItem() {
    // get the value that is in the textbox
    let itemText = document.getElementById("item").value;

    // get the list of elements
    let itemList = document.getElementById("items");

    // add the value to the list of elements
    let li = document.createElement("li");
    li.innerText = itemText;
    itemList.appendChild(li);
}

function changeColor() {
    // get the element that we want to manipulate
    let ul = document.getElementById("items");
    // change the style
    ul.style.backgroundColor = document.getElementById("color").value;
}