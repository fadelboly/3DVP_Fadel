document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
});

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Exporter la fonction pour les tests
module.exports = { removeTask };
