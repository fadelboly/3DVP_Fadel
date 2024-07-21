//ce fichier a pour but de tester la fonction removeTask
//dans le code de l'application. il importe le script
//contenu dans le fichier script.js et commence le
//processus de vérification en vérifiant qu'une tâche
//est bien supprimée lorsqu'on clique sur le button "remove"

const { removeTask } = require("../script");

beforeEach(() => {
  document.body.innerHTML = `
    <input id="taskInput" />
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>
  `;

  global.removeTask = removeTask;

  const addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});

test("should remove a task when the Remove button is clicked", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  taskInput.value = "Test Task";
  addTaskBtn.click();

  expect(taskList.children.length).toBe(1);

  const removeBtn = taskList.querySelector("button");
  removeBtn.click();

  expect(taskList.children.length).toBe(0);
});
