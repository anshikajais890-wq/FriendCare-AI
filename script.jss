
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const chatStatus = document.getElementById("chatStatus");

// Display a message in the chat
function showMessage(text, sender) {
    const message = document.createElement("p");

    message.classList.add("message", sender);
    message.textContent = text;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple demo responses (not an actual AI model)
function getReply(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hey, friend! 💗 How is your day going?";
    }

    if (text.includes("study") || text.includes("exam")) {
        return "Try studying one topic at a time. Start with 25 minutes and take a short break!";
    }

    if (text.includes("sad") || text.includes("upset")) {
        return "I'm sorry things feel difficult. Take your time, and consider talking to someone you trust.";
    }

    if (text.includes("tired")) {
        return "A short break, some water, and proper rest may help you recharge. 🌷";
    }

    if (text.includes("food") || text.includes("lunch")) {
        return "You could try a simple balanced meal, such as dal, rice, vegetables, and curd if suitable for you.";
    }

    return "I'm here to help! Tell me a little more so we can think through it together. 😊";
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") return;

    showMessage(message, "user");
    userInput.value = "";

    chatStatus.textContent = "Your friend is thinking...";

    setTimeout(function() {
        const reply = getReply(message);
        showMessage(reply, "bot");
        chatStatus.textContent = "Ready to chat 💗";
    }, 400);
});

// Study task manager
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const progress = document.getElementById("progress");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const task = taskInput.value.trim();

    if (!task) return;

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("span");

    checkbox.type = "checkbox";
    label.textContent = task;

    checkbox.addEventListener("change", function() {
        label.classList.toggle("completed", checkbox.checked);
        updateProgress();
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    taskList.appendChild(item);

    taskInput.value = "";
    updateProgress();
});

function updateProgress() {
    const total = taskList.querySelectorAll("li").length;
    const completed = taskList.querySelectorAll(
        "input[type='checkbox']:checked"
    ).length;

    progress.textContent =
        `${completed} of ${total} tasks completed`;
}

// Mood check-in
const moodButtons = document.querySelectorAll("[data-mood]");
const moodResult = document.getElementById("moodResult");

const moodMessages = {
    Happy: "That's lovely! Enjoy the things that make you smile. 💗",
    Okay: "Every day doesn't have to be perfect. Take things one step at a time.",
    Tired: "Give yourself time to rest and recharge. 🌷",
    Stressed: "Pause for a moment and choose one small thing to focus on."
};

moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const mood = button.dataset.mood;

        moodResult.textContent =
            "You are feeling " + mood + ". " + moodMessages[mood];
    });
});
