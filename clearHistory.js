// Clear History Feature
const clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", function () {
    const history = document.getElementById("history");
    history.innerHTML = "";
});


