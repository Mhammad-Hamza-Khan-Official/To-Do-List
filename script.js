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
                       <div class="list-task-contain w-full flex pl-4  gap-2 items-center justify-between task-contain-${Class}">
                        <!-- .left side  -->
                         <div class="left-side flex gap-1 flex-col">

                           <div class="inputs flex  items-center gap-4  ">
                            <!-- Checkbox to find task is complete  -->
                             <div class="check-box h-full flex items-center ">

                               <input type="checkbox" name="" id="" value="complete" class="check-complete-${id} circle-check task-check text-display text-display-${Class}">
                             </div>
                             <div>
                              <!-- Get title input and title display -->
                               <!-- input -->
                               <input type="text" name="" id="" placeholder="Title" class="title input-title-${id} inputs-display inputs-display-${Class} ls-1 p-1 pl-1 pr-1 re-border re-outline bg-input task-input-text">
                                <!-- display -->
                               <h1 id="" class="title display-title-${id} text-sm task-text title text-display text-display-${Class}">HTML</h1>
                             </div>
                           </div>
                           <!-- Text area for details  -->
                            <!-- input -->
                           <textarea name=""  cols="2.2" rows="3" placeholder="Details"  class=" input-title-${id} inputs-display inputs-display-${Class} bg-input re-border re-outline p-1 pl-1 pr-1 ls-1 task-textArea "></textarea>
                            <!-- display -->
                           <p id="details" class="para-display display-detail-${id} details text-display text-display-${Class} pl-8 text-xs ">This is details</p>
                            <!-- Date container  -->
                             <!-- to set date -->
                           <div class="date flex gap-2 items-center inputs-display inputs-display-${Class} task-date-contain">
                             <button class="task-today-btn today-btn-${id}">Today</button>
                             <button class="task-tomorrow-btn tomorrow-btn-${id}">Tomorrow</button>
                             <input type="date" class="task-date-input input-date-${id}" name="" id="date">
                             <button class="btn-done task-done-btn done-${id}">Done</button>
                           </div>
                          </div>
                          <!-- Right side img dots -->
                           <div class="right-side">
                             <div class="img-circle c-pointer task-dot-contain flex items-center text-display dots-${id} text-display-${Class}">
                               <img src="./assets/icons/Dots.svg" alt="" class="dots-input  img-4">
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
                  <div class="add-task flex items-center gap-4 Add-task-btn-${id} c-pointer">
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
                     <div class="task-container task-container-${id} w-full flex items-center pr-4 task-contain" >
                      
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
  });
});

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

//title and detail
//Select all title and detail class

// //select title class means h1
// let titleText = document.querySelector(".title")
// //select detail class means p
// let detailText = document.querySelector(".detail")

// ===================================
// Load lists from local storage
// ===================================

window.addEventListener("DOMContentLoaded", () => {
  for (let key in localStorage) {
    // Check for mainList
    if (key.startsWith("mainList-")) {
      mainContainer.insertAdjacentHTML("beforeend", localStorage.getItem(key));
      //Check for sideList
    } else if (key.startsWith("sideList-")) {
      sidebarListContain.insertAdjacentHTML(
        "beforeend",
        localStorage.getItem(key),
      );

      //Check for sideListId
    } else if (key.startsWith("sideListId-")) {
      let id = localStorage.getItem(key);
      let checkbox = document.querySelector(`#${id}`);
      // Track checkbox state
      checkbox.addEventListener("change", (cd) => {
        let checked = cd.target.checked;
        let mainLists = document.querySelectorAll(`#${id}`)[1];
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
    }
  }
});
