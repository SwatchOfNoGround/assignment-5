// background color change
document.getElementById("theme-change-btn").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
