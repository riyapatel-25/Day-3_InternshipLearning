window.onload = function() {
 localStorage.setItem("older_list", $(list_el).val());
}

var old_list = localStorage.getItem("older_list");

window.addEventListener('load',() => {
 const form = document.querySelector("#newtask__form");
 const input = document.querySelector("#newtask-input");
 const list_el = document.querySelector("#tasks");

 form.addEventListener('submit', (e) => {
  e.preventDefault();//prevents refreshing of page
  const task = input.value;//value(String) task

  //if input for task is empty.alert the user
  if(!task) {
   alert("Please enter the task!!");
   return;
  }

  const task_el = document.createElement('div');
  task_el.classList.add('task');

  const task_content_el = document.createElement('div');
  task_content_el.classList.add('content');
  // task_content_el.innerText = task;

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement('input');
  task_input_el.classList.add('task__list-input');
  task_input_el.type = 'text';
  task_input_el.value = task;
  task_input_el.setAttribute("readonly","readonly");

  task_content_el.appendChild(task_input_el);

  list_el.appendChild(task_el);

  //button-actions
  const task_actions_el = document.createElement('div');
  task_actions_el.classList.add('actions');
  const task_edit_btn = document.createElement('button');
  task_edit_btn.classList.add('edit-btn');
  task_edit_btn.innerHTML = "Edit";
  const task_reset_btn = document.createElement('button');
  task_reset_btn.classList.add('reset-btn');
  task_reset_btn.innerHTML = "Delete";

  task_actions_el.appendChild(task_edit_btn);
  task_actions_el.appendChild(task_reset_btn);
  task_el.appendChild(task_actions_el); 


  //actions when edit button is clicked
  task_edit_btn.addEventListener('click', () => {

   if(task_edit_btn.innerText == "Edit"){
   task_input_el.removeAttribute("readonly");//remove readonly attribute,so that user can edit teh task
   task_input_el.focus();
   task_edit_btn.innerText = "Save";
   }else{
    task_input_el.setAttribute("readonly","readonly");
    task_edit_btn.innerText = "Edit";
   }
  })

  //actions when delete button is clciked
  task_reset_btn.addEventListener('click', () => {
   list_el.removeChild(task_el);
  });
 });
});






