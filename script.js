
// Part 1: Basics


// Variables & Conditionals
function checkAge() {
  let age = document.getElementById("userAge").value;
  let message;

  if (age >= 18) {
    message = "You are an adult ✅";
  } else if (age > 0) {
    message = "You are still a minor ❌";
  } else {
    message = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = message;
}


// Part 2: Functions


// Function to calculate totals
function showTotal(a, b) {
  let total = calculateSum(a, b);
  document.getElementById("totalResult").innerText = "Total is: " + total;
}

// Reusable function
function calculateSum(num1, num2) {
  return num1 + num2;
}



// For loop countdown
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// While loop example
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
  console.log("Number:", numbers[index]);
  index++;
}


// Part 4: DOM Manipulation


// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Add new item dynamically
function addNewItem() {
  let ul = document.getElementById("itemList");
  let li = document.createElement("li");
  li.innerText = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
}

// DOM event listener
document.body.addEventListener("click", function () {
  console.log("Body was clicked!");
});
