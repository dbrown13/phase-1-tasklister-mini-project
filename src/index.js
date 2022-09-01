document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("point 1")
  let input = document.getElementById('new-task-description').value;
  console.log(input);
  document.getElementById("tasks").innerHTML += input})});