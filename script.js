document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('add-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskNameInput = document.getElementById('task-name');
    const taskDateInput = document.getElementById('task-date');

    const taskName = taskNameInput.value.trim();
    const taskDate = taskDateInput.value.trim();

    if (!taskName || !taskDate) {
      alert('Please fill in all fields.');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskName} - ${taskDate}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Splněno';
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskNameInput.value = '';
    taskDateInput.value = '';
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-item").forEach(n =>n.addEventListener("click",
 () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
 }))
