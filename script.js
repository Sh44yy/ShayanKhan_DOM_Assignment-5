
// Task 1: Button Click Event
let clickMeBtn = document.getElementById("clickMeBtn");

clickMeBtn.addEventListener("click", function() {
    alert("Button Clicked Successfully");
});


// Task 2: Change Text on Click
let paraForTextChange = document.getElementById("paraForTextChange");
let changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function() {
    paraForTextChange.textContent = "Text Updated Successfully";
});


// Task 3: Background Color Change
let changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

changeBackgroundBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});


// Task 4: Input Event (Live Typing)
let userInput = document.getElementById("userInput");
let showTypedText = document.getElementById("showTypedText");

userInput.addEventListener("input", function() {
    showTypedText.textContent = userInput.value;
});


// Task 5: Mouse Events
let mouseHoverBox = document.getElementById("mouseHoverBox");

mouseHoverBox.addEventListener("mouseenter", function() {
    mouseHoverBox.style.backgroundColor = "lightgreen";
});

mouseHoverBox.addEventListener("mouseleave", function() {
    mouseHoverBox.style.backgroundColor = "lightblue";
});


// Task 6: Double Click Event
let doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", function() {
    alert("Double Click Detected");
});
