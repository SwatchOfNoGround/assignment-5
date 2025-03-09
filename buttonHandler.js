const completedBtn = document.getElementsByClassName("completed-btn");
// adding history function
for (let btn of completedBtn) {
    btn.addEventListener("click", function () {
        // Generate timestamp
        const timestamp = new Date().toLocaleTimeString();
        // Find the .task-title related to the button using while loop
        const taskContainer = btn.parentElement.parentElement.parentElement;
        const taskTitle = taskContainer.querySelector(".task-title").textContent;
        // Add task title to history
        const history = document.getElementById("history");
        const historyMessage = document.createElement("p");
        historyMessage.classList.add("mx-3", "my-5")
        historyMessage.innerText = `You have completed ${taskTitle} at ${timestamp}`;
        history.append(historyMessage);
        // alert message
        alert("Board updated successfully!");

    });
}


// task increment & decrement function
const taskAssignedNumber = document.getElementById("task-assigned-number")
const taskCompleted = document.getElementById("task-completed")
for (let btn of completedBtn) {
    btn.addEventListener("click", function () {
        // increment and decrement
        taskAssignedNumber.innerText = parseInt(taskAssignedNumber.innerText) - 1
        taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;
        // change made to the button
        btn.setAttribute('disabled', true);
        btn.classList.add('bg-taskDone');
        // congates message
        const taskRemaining = taskAssignedNumber.innerText
        if (parseInt(taskRemaining) === 0) {
            alert("Congrates!!! You have completed all the current task")
        }

    });
}
