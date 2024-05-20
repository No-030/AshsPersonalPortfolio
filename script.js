let comments = [];
document.getElementById("comAdd")
    .addEventListener("click", addCom);

document.getElementById("comRemove")
    .addEventListener("click", removeCom);

document.getElementById("LoadCom")
    .addEventListener("click", displayCom);


function addCom(){
    const newItem = document.getElementById("itemInput").
    value.trim(); 
    if (newItem !== "") {
    comments.push(newItem)
    document.getElementById("comments")
    .innerHTML += `<div id="comment">${newItem}</div>`;
    document.getElementById("itemInput").value = "";
    }
}

function removeCom() {
    const itemInput = document.getElementById("itemInput");
    const itemNumber = parseInt(itemInput.value);

    if (itemNumber >= 1 && itemNumber <= comments.length) {
        comments.splice(itemNumber - 1, 1);
        displayCom();
    } else {
        itemInput.value = "Invalid item number";
        console.log("Invalid item number.");
    }
}

let listVisible = true; // Variable to track list visibility

function toggleList() {
    const listContainer = document.getElementById("comments");

    if (listVisible) {
        listContainer.innerHTML = ""; // Clear the list when hiding
        listContainer.style.display = "none"; // Hide the list container
    } else {
        displayCom(); // Update the list display
        listContainer.style.display = "block"; // Show the list container
    }
    
    listVisible = !listVisible; // Toggle visibility state
}

function displayList() {
    const listContainer = document.getElementById("comments");
    listContainer.innerHTML = "";

    comments.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
}
