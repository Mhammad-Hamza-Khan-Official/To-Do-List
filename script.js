// Select hamburger menu button
let hamberger = document.querySelector("#hamberger");

// Select sidebar element
let sidebar = document.querySelector(".sidebar");

// Track sidebar open/close state
let sidebarOpen = true;

// Toggle sidebar on hamburger click
hamberger.addEventListener("click", () => {
  if (sidebarOpen) {
    // Open sidebar
    sidebar.style.width = "100%";
    sidebar.style.padding = "0px 30px";
    sidebar.style.borderRight = "1px solid rgb(48, 48, 48)";
    sidebarOpen = false;
  } else {
    // Close sidebar
    sidebar.style.width = "0px";
    sidebar.style.padding = "0px";
    sidebar.style.border = "0px";
    sidebarOpen = true;
  }
});

// ------------------------------------------------

// Function to make inner main list tasks work
let InnerMainListTask = (Container, Class) => {
  let id = Class;
  let innerList = `<!-- Items  -->
                    <div class="list-task-contain task-contain-${Class} ">
                      <!-- .left side  -->
                      <div class="left-checkbox flex items-center justify-center p-1">

                        <div class="inputs  items-center gap-4  ">
                          <!-- Checkbox to find task is complete  -->
                          <div class="check-box  ">

                            <input type="checkbox" name="" id="check-complete-${id}" value="complete"
                              class=" circle-check task-check text-display text-display-${Class}">
                          </div>
                        </div>

                      </div>

                        <!-- ---------------------------  -->
                        <div class="middle flex flex-col gap-1 p-1">
                          <div>
                            <!-- Get title input and title display -->
                            <!-- input -->
                            <input type="text" name="" id="input-title-${id}" placeholder="Title"
                              class="title w-full inputs-display inputs-display-${Class} ls-1 p-1 pl-1 pr-1 re-border re-outline bg-input task-input-text">
                            <!-- display -->
                            <h1 id="display-title-${id}"
                              class="title text-sm task-text title text-display text-display-${Class}">HTML</h1>
                          </div>

                          <!-- Text area for details  -->
                          <div class="details-contain">
                            <!-- input -->
                            <textarea name="" rows="3" placeholder="Details" id="input-detail-${id}"
                              class="  inputs-display inputs-display-${Class} bg-input re-border re-outline p-1 pl-1 pr-1 ls-1 task-textArea w-full"></textarea>
                            <!-- display -->
                            <p id="display-detail-${id}"
                              class="para-display  details text-display text-display-${Class}  text-xs ">This is
                              details</p>
                          </div>
                          <!-- Date container  -->
                          <!-- to set date -->
                          <div class="date  inputs-display inputs-display-${Class} task-date-contain">
                            <button class="task-today-btn" id="today-btn-${id}">Today</button>
                            <button class="task-tomorrow-btn " id="tomorrow-btn-${id}">Tomorrow</button>
                            <input type="date" class="task-date-input  name="" id=" input-date-${id}"">
                            <button class="btn-done task-done-btn " id="done-btn-${id}">Done</button>
                          </div>
                        </div>
                        
                        <div class="rignt">
                          <!-- Right side img dots -->
                          <div class="right-side p-1">
                            <div class=" c-pointer task-dot-contain  text-display  text-display-${Class}"
                              id="dots-${id}">
                              <img src="./assets/icons/Dots.svg" alt="" class="dots-input  img-4">
                            </div>
                          </div>
                        </div>

                    </div>
                    <!-- ---------------------------  -->`;
  // Append inner list to container
  Container.insertAdjacentHTML("beforeend", innerList);
};

//----------------------------------------------------

// Create and add main task list section
const addMainList = (container, id, innerhtml, checked) => {
  id = id
    .replaceAll(" ", "-")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .toString()
    .trim();
  id = id.toUpperCase();
  // Main list HTML structure
  let mainList = `<!-- ----------------------------------------------- -->
        <div class="task-content-container" id="${id}">
          <!-- --------------------main-content -->
           <div class="main-contain h-full flex justify-center">
            <div class="contain-content">
              <div class="contain">
                <div class="head flex flex-col gap-5">
                  <div class="head flex items-center justify-between">
                    <h3>${innerhtml}</h3>
                    <span class="img-circle flex justify-center items-center">
                      <img src="./assets/icons/Dots.svg" alt="" />
                    </span>
                  </div>
                  <div class="add-task flex items-center gap-4 Add-task-btn Add-task-btn-${id} c-pointer" id="Add-task-btn-${id}">
                    <img src="./assets/icons/WhiteTick.svg" alt="" />
                    <p>Add a task</p>
                  </div>
                </div>
                <!-- List content -->
                <div class="List-content flex flex-col justify-center items-center h-full mt-5">

                  <!-- No tasks yet -->
                  <div class="empty-task flex justify-center items-center" id="empty-task-${id}">
                    <div class="content flex flex-col justify-center items-center" id="content">
                      <img src="./assets/image/NoAnyTasks.svg" alt="" class="no-task-img" />
                      <h3 class="text-base">No starred tasks</h3>
                      <p class="text-sm">
                        Mark important tasks with a star so you can easily find them here
                      </p>
                    </div>
                  </div>

                    <!-- Tasks list container -->
                     <div class="task-container task-container-${id} w-full flex items-center pr-4 task-contain flex-col gap-2" >
                      
                     </div>
                     <!-- ======================= -->
                </div>

              </div>
            </div>
           </div>
        </div>`;

  // Store main list in local storage
  localStorage.setItem(`mainList-${id}`, mainList);
  // Append main list to container
  container.insertAdjacentHTML("beforeend", mainList);
  console.log("container:", container);

  let addTaskBtn = document.querySelector(`.Add-task-btn-${id}`);
  let taskContain = document.querySelector(`.task-contain-${id}`);
  let emptyTask = document.querySelector(`#empty-task-${id}`);
};

// ----------------------------------------------------

// ----------------------------------------------------

// Sidebar checklist container
let sidebarListContain = document.querySelector("#check-lists");

// Existing sidebar checkboxes
let inputCheckBox = document.querySelectorAll(".sideCheckBox");

// Main content container
let mainContainer = document.querySelector("#main-container");

// Create and add sidebar list item
const addSideList = (container, innerhtml, id) => {
  id = id
    .replaceAll(" ", "-")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .toString()
    .trim();
  id = id.toUpperCase();
  // Sidebar checkbox HTML
  let sideList = `
    <div class="flex items-center gap-2 sidebar-btn-w">
      <input type="checkbox" id="${id}" class="sideCheckBox" value="${innerhtml}" checked>
      <label for="${id}" class="text-sm">${innerhtml}</label>
    </div>`;

  // Append checkbox to sidebar
  container.insertAdjacentHTML("beforeend", sideList);

  // Select newly created checkbox
  let newInputCheckBox = document.querySelector(`#${id}`);

  // Track checkbox state
  newInputCheckBox.addEventListener("change", (cd) => {
    let checked = cd.target.checked;
    let value = cd.target.value;
    let labelText = cd.target.labels[0].innerText;
    let id = cd.target.id;

    console.log("clicked:", checked);
    console.log("value:", value);
    console.log("id:", id);

    console.log("label:", labelText);
    // display of main list
    //track main list
    let mainLists = document.querySelectorAll(`#${id}`)[1];
    console.log(mainLists);

    //Main list Conditions
    //If checked
    if (checked) {
      //visible
      mainLists.style.display = "block";
      //if unchecked
    } else if (!checked) {
      mainLists.style.display = "none";
    }
  });

  //add Local Storage for sidebar
  localStorage.setItem(`sideList-${id}`, sideList);
  // add id in local storage
  localStorage.setItem(`sideListId-${id}`, id);

  return sideList;
};

// ----------------------------------------------------

// Store popup input values
let inputText = [];

// Popup container
let popPop = document.querySelector(".pop-container");

// Create list button
let createListBtn = document.querySelector("#create-list-btn");

// Popup text input
let popText = document.querySelector("#pop-text");

// Done button
let done = document.querySelector("#done");

// Show popup on create list click
createListBtn.addEventListener("click", () => {
  popPop.style.display = "flex";
  done.style.color = "grey";
});

// Track popup input value
popText.addEventListener("input", () => {
  // Enable/disable done button color
  if (popText.value === "") {
    done.style.color = "grey";
  } else {
    done.style.color = "rgb(58, 127, 238)";
  }

  // Store input value
  inputText.push(popText.value);
});

// Track existing sidebar checkbox changes
inputCheckBox.forEach((e) => {
  e.addEventListener("change", (cd) => {
    let checked = cd.target.checked;
    let value = cd.target.value;
    let labelText = cd.target.labels[0].innerText;
    let id = cd.target.id;

    console.log("clicked:", checked);
    console.log("value:", value);
    console.log("label:", labelText);

    let mainList = document.querySelectorAll(`#${id}`)[1];
    console.log(mainList);

    // condition for main list
    //If checked
    if (checked) {
      //visible
      mainList.style.display = "block";
      //if unchecked
    } else if (!checked) {
      mainList.style.display = "none";
    }
  });
});

// ----------------------------------------------------

// Handle done button click
let lastIdx;

done.addEventListener("click", () => {
  // Get last entered value
  lastIdx = inputText.length - 1;
  //Set id
  let id = inputText[lastIdx]
    ?.replaceAll(" ", "-")
    ?.replace(/[^a-zA-Z0-9\s-]/g, "");
  //Get inner HTML
  let innerhtml = inputText[lastIdx];
  // Validate input
  if (innerhtml) {
    // Hide popup
    popPop.style.display = "none";
    // Set current main list id
    idOfMainList = id;

    // Add sidebar list item
    addSideList(sidebarListContain, innerhtml, id);

    // Add main list section
    addMainList(mainContainer, id, innerhtml);
  }
  // Reset input state
  inputText = [];
  popText.value = "";
});
// ----------------------------------------------------

// Cancel popPop
let cancle = document.querySelector("#cancle");

// Hide popup on cancel
cancle.addEventListener("click", () => {
  popPop.style.display = "none";
});

//Inner main list Tasks
// ===================

// Track Add task button clicks
window.addEventListener("load", () => {
  document.querySelectorAll(".Add-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Add task button clicked:", btn);
      console.log("Add task button id clicked:", btn.id);
      // We can add functionality here to handle adding a task

      //Remove empty task message when adding a task
      let id = btn.id.replace("Add-task-btn-", "");
      let emptyTask = document.querySelector(`#empty-task-${id}`);
      emptyTask.style.display = "none";

      // Select the task container for the corresponding main list
      let taskContain = document.querySelector(`.task-container-${id}`);
      // Call function to add inner main list task
      InnerMainListTask(taskContain, id); // Add task to the specific main list

      console.log("taskContain :", taskContain);

      // Input Title
      let titleInput = document.querySelectorAll(".task-input-text");

      // Array of title
      let titleArray = [];
      //Track input title
      titleInput.forEach((e) => {
        e.addEventListener("input", (cd) => {
          //Get value
          let value = cd.target.value;
          //push the value in empty Array
          titleArray.push(value);
          console.log(`title value ${value}`);
        });
      });

      // --------------------------------
      // Input Details
      let detailInput = document.querySelectorAll(".task-textArea");

      // Array of details
      let detailArray = [];
      //Track input details
      detailInput.forEach((e) => {
        e.addEventListener("input", (cd) => {
          //Get value
          let value = cd.target.value;
          //push the value in empty Array
          detailArray.push(value);
        });
      });

      // --------------------------------
      // Input Date
      let dateInput = document.querySelectorAll(".task-date-input");
      // Array of dates
      let dateArray = [];
      //Track input date
      dateInput.forEach((e) => {
        e.addEventListener("input", (cd) => {
          //Get value
          let value = cd.target.value;
          //push the value in empty Array
          dateArray.push(value);
        });
      });
      // --------------------------------
      // Today Button
      let todayBtn = document.querySelectorAll(".task-today-btn");
      //Track Today button click
      todayBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          //Get today's date
          let today = new Date().toISOString().split("T")[0];
          //Find the corresponding date input
          let dateInput = btn.nextElementSibling;
          //Set date input value to today's date
          dateInput.value = today;
        });
      });
      // --------------------------------
      // Tomorrow Button
      let tomorrowBtn = document.querySelectorAll(".task-tomorrow-btn");
      //Track Tomorrow button click
      tomorrowBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          //Get tomorrow's date
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          let tomorrowDate = tomorrow.toISOString().split("T")[0];
          //Find the corresponding date input
          let dateInput = btn.nextElementSibling;
          //Set date input value to tomorrow's date
          dateInput.value = tomorrowDate;
        });
      });
      // --------------------------------
      // Done Button
      let doneBtn = document.querySelectorAll(`#done-btn-${id}`);
      //Track Done button click
      doneBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          //Get Title
          let titleInput =
            btn.parentElement.parentElement.querySelector(".task-input-text");
            console.log(`titleInput :${titleInput}`);
            
            //Get Details
            let detailInput =
              btn.parentElement.parentElement.querySelector(".task-textArea");

          //Get Title display
          let titleDisplay =
            btn.parentElement.parentElement.querySelector(".task-text");
          //Get Details display
          let detailDisplay =
            btn.parentElement.parentElement.querySelector(".details");

          //Set Title display and hide input
          titleDisplay.innerText = titleInput.value;
          titleInput.style.display = "none";
          titleDisplay.style.display = "block";
          //Set Details display and hide input
          detailDisplay.innerText = detailInput.value;
          detailInput.style.display = "none";
          detailDisplay.style.display = "block";
          //Display checkbox
          let checkBox =
            btn.parentElement.parentElement.querySelector(".task-check");
          checkBox.style.display = "block";
          //Hide date input and buttons
          let dateContain =
            btn.parentElement.parentElement.querySelector(
              ".task-date-contain",
            );
          dateContain.style.display = "none";
        });
      });
    });
    // -----------------------------------------
  });
});

// ===================================
// Load lists from local storage
// ===================================


window.addEventListener("DOMContentLoaded", () => {
  for (let key in localStorage) {

    // Load main lists
    if (key.startsWith("mainList-")) {
      mainContainer.insertAdjacentHTML(
        "beforeend",
        localStorage.getItem(key)
      );
    }

    // Load sidebar lists
    else if (key.startsWith("sideList-")) {
      sidebarListContain.insertAdjacentHTML(
        "beforeend",
        localStorage.getItem(key)
      );
    }
  }

  document.querySelectorAll(".sideCheckBox").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      let id = e.target.id;

      // second element with same id = main list
      let mainList = document.querySelectorAll(`#${id}`)[1];
      if (!mainList) return;

      mainList.style.display = e.target.checked ? "block" : "none";
    });
  });
});
