const taskForm = document.getElementById("task-form");
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function createTask() {
  let inputValue = taskInput.value;
  console.log(inputValue);

  if (inputValue) {
    console.log(inputValue);

    // taskList.innerHTML += `
    //      <div class="tasks p-2 flex items-center justify-between border-[1px] border-gray-200 rounded-lg">
    //         <p> ${inputValue}</>
    //         <div class="w-[20%]">
    //           <button class="delete bg-red-600 p-2 text-white rounded-lg">Delete</button>
    //           <button class="edit bg-green-600 p-2 text-white rounded-lg">Edit</button>
    //         </div>
    //      </div>
    //     `;
    // Create a Task list
    const listDiv = document.createElement("div");
    listDiv.classList.add("task");
    // create a input field
    const taskName = document.createElement("input");
    taskName.classList.add("w-[80%]");
    taskName.value = inputValue;
    taskName.setAttribute("readonly", "readonly");

    // Create Button Group
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("w-[20%]", "flex", "gap-2");
    // Create a deleate Btn
    const deleatBtn = document.createElement("button");
    deleatBtn.classList.add("delete");
    deleatBtn.innerText = "Delete";
    // Create a Edit Btn
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";

    // assign delete & edit Btn
    buttonGroup.appendChild(deleatBtn);
    buttonGroup.appendChild(editBtn);

    // assign the input field & button Group
    listDiv.appendChild(taskName);
    listDiv.appendChild(buttonGroup);

    // assign the tasklist div
    taskList.appendChild(listDiv);
  } else {
    alert("Pls insert a task!");
  }
  const deleatBtn = document.querySelectorAll(".delete");
  deleatBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
  });

  const editBtn = document.querySelectorAll(".edit");
//   editBtn.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       let task = e.target.parentNode.parentNode.firstElementChild;
//     //   console.log(task);
//       if (e.target.innerText === "edit") {
//         task.removeAttribute("readonly");
//         task.focus();
//         item.innerText = "save";
//       } else {
//         item.innerText = "edit";
//         task.setAttribute("readonly", "readonly");
//       }
//     });
//   });
editBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   console.log(e.target.parentNode.parentNode);
      let task = e.target.parentNode.parentNode.firstElementChild;
      console.log(task);
      if (e.target.innerText === "edit") {
        task.removeAttribute("readonly");
        task.focus();
        item.innerText = "Save";
      } else {
        item.innerText = "edit";
        task.setAttribute("readonly", "readonly");
      }
    });
  });
  taskInput.value = "";
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  createTask();
});
