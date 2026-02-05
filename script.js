// Select hamburger menu button
let hamberger = document.querySelector("#hamberger");

// Select sidebar element
let sidebar = document.querySelector(".sidebar-container");

// Track sidebar open/close state
let sidebarOpen = true;

// Toggle sidebar on hamburger click
hamberger.addEventListener("click", () => {
  if (sidebarOpen) {
    // Open sidebar
    sidebar.style.width = "270px";
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
  let innerList = `
                    <!-- ======================= -->
                    <!-- Items  -->
                    <div class="list-task-contain task-contain task-contain-${Class} ">
                      <!-- .left side  -->
                      <div class="left-checkbox flex items-center justify-center p-1 text-display">

                        <div class="inputs  items-center gap-4  ">
                          <!-- Checkbox to find task is complete  -->
                          <div class="check-box  ">

                            <input type="checkbox" name="" id="check-complete-${id}" value="complete"
                              class=" circle-check task-check  text-display-${Class}">
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
                              class="title text-sm task-text title text-display text-display-${Class}"></h1>
                          </div>

                          <!-- Text area for details  -->
                          <div class="details-contain">
                            <!-- input -->
                            <textarea name="" rows="3" maxlength="200" placeholder="Details" id="input-detail-${id}"
                              class="  inputs-display inputs-display-${Class} bg-input re-border re-outline p-1 pl-1 pr-1 ls-1 task-textArea w-full"></textarea>
                            <!-- display -->
                            <p id="display-detail-${id}"
                              class="para-display  details text-display text-display-${Class}  text-xs "></p>
                              <div class="date-inner-list flex gap-2 text-xs text-display text-display-${Class}"><span class="day" data-id="${id}"></span>  <span class="month" data-id="${id}"></span>  <span class="date" data-id="${id}"></span>
                            </div>
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
                              <details class="main-list-dropDown relative">
                              <summary>
                              <div class="main-list-dot flex justify-center items-center">
                              <img src="./assets/icons/Dots.svg" alt="" class="dots-input  img-4">
                                  </div>
                                </summary>
                                  <ul>
                                     <li class="task-edit-${id} task-rename">Edit</li>
                                     <li class="task-delete-${id} task-delete">Delete</li>
                                  </ul>
                              </details>
                            </div>
                          </div>
                        </div>

                    </div>
                    <!-- ---------------------------  -->
                  `;
  // Append inner list to container
  Container.insertAdjacentHTML("beforeend", innerList);
};

//----------------------------------------------------
const addCompletedTask = (container, id) => {
  // Code to add completed task
  let completedTask = ` <!-- List items -->
                      <div class="list-container completed-list-${id}  flex gap-3 relative  flex justify-between mt-2">
                        <!-- container  -->
                        <div class="container flex items-center gap-3 pl-4">
                          <!-- tick img  -->
                          <div class="img">
                            <img src="./assets/icons/successTick.svg" alt="">
                          </div>
                          <!-- text  -->
                          <div class="text gap-1 flex flex-col ">
                            <!-- title  -->
                            <p class="title completed-title-${id} completed-title text-xs" data-id="${id}">
                            </p>
                            <!-- Date  container-->
                            <div class="date-contain Date-container flex flex-col  gap-2 ">
                              <p>Completed :</p>
                              <div class="flex items-center gap-2">
                              <p class="day day-${id}">Tue</p>
                              <p class="month month-${id}">Feb</p>
                              <p class="Date date-${id}">14</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Right img bin  -->
                        <div class="right-img delete-${id} delete-btn pr-4">
                          <img src="assets/icons/Bin.svg" alt="Bin">
                        </div>
                      </div>
                      <!-- =============================================== -->`;
  // Append completed task to container
  container.insertAdjacentHTML("beforeend", completedTask);
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
                    <h3 class="list-Title list-Title-${id}">${innerhtml}</h3>
                    <details class="main-list-dropDown relative">
                      <summary>
                        <div class="main-list-dot flex justify-center items-center">
                            <img src="./assets/icons/Dots.svg" alt="menu" />
                        </div>
                      </summary>
                        <ul>
                             <li class="mainList-rename-${id} mainList-rename">Rename</li>
                             <li class="mainList-delete-${id} mainList-delete">Delete</li>
                        </ul>
                    </details>
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
                      <h3 class="text-base">No Any Task Yet.</h3>
                      <p class="text-sm">
                        Mark important tasks with a star so you can easily find them here
                      </p>
                    </div>
                  </div>

                  <!-- Every Task Completed -->
                  <div class="empty-task flex completed-task justify-center items-center" id="completed-task-${id}">
                    <div class="content flex flex-col justify-center items-center" id="content">
                      <img src="./assets/image/Complete.png" alt="" class="no-task-img" />
                      <h3 class="text-base">Every Task Completed</h3>
                      <p class="text-sm">
                        Mark important tasks with a star so you can easily find them here
                      </p>
                    </div>
                  </div>

                    <!-- Tasks list container -->
                     <div class="task-container task-container-${id} w-full flex items-center  task-contain flex-col gap-2" >
                      
                     </div>
                     <!-- ======================= -->
                       <!-- completed -->
                  <details class="complete-container complete-container-${id} w-full pl-4 gap-2" id="">
                    <summary class=" c-pointer w-full gap-2">
                      <img class="arrow img " src="./assets/icons/ArrowHead.svg" alt="">
                      <span>Completed (<span id="completed-num-${id}">1</span>)</span>
                    </summary>
                   <!-- ======================================================================== -->
                    <!-- Completed list Container-->
                    <div class="completed-list-container completed-list-container-${id} flex flex-col gap-1 w-full justify-center items-center">
 
                    </div>
                  </details>
                  <!-- ---------------------------------------------------------- -->
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

//To find number of list
const overflowContainer = document.querySelector(".overflow-container");
//Target no created Sms
const noCreatedSms = document.querySelector("#no-created-list");

// Store popup input values
let inputText = [];

// Popup container
let popPop = document.querySelector(".pop-container");

// Create list button
let createListBtn = document.querySelector("#create-list-btn");

// Popup text input
let popText = document.querySelector("#pop-text");

// Done button of popPop
let done = document.querySelector("#done");

// Show popup on create list click
createListBtn.addEventListener("click", () => {
  //Show popPop
  popPop.style.display = "flex";
  done.style.color = "grey";
  //Show Create popPop only
  document.querySelector(`.create-pop-text`).style.display = "block";
  document.querySelector(`.rename-pop-text`).style.display = "none";
  document.querySelector(`.delete-pop-text`).style.display = "none";
  // --------------------------------------------------------------------
  document.querySelector(`.create-pop-btn`).style.display = "block";
  document.querySelector(`.rename-pop-btn`).style.display = "none";
  document.querySelector(`.delete-pop-btn`).style.display = "none";
  //---------------------------------------------------------------------
  document.querySelector(`.pop-input`).style.display = "block";
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
  document.querySelector("#error").style.display = "none";
});

// ----------------------------------------------------
const listTitle = document.querySelectorAll(".list-Title");
window.addEventListener("load", (e) => {
  const allListTitle = document.querySelectorAll(".list-Title");
  let listTitle = [];
  allListTitle.forEach((e) => {
    console.log(`list Title : ${e.innerText}`);
    listTitle.push(e.innerText);
  });

  //To rename main listBtn
  let renameBtn = document.querySelectorAll(".mainList-rename");
  if (renameBtn) {
    renameBtn.forEach((btn) => {
      btn.addEventListener("click", (listRenameBtn) => {
         //to close dropDown
          let dropDown = btn.parentElement.parentElement.open = ''
        //Show Rename popPop only
        document.querySelector(`.create-pop-text`).style.display = "none";
        document.querySelector(`.rename-pop-text`).style.display = "block";
        document.querySelector(`.delete-pop-text`).style.display = "none";
        // --------------------------------------------------------------------
        document.querySelector(`.create-pop-btn`).style.display = "none";
        document.querySelector(`.rename-pop-btn`).style.display = "block";
        document.querySelector(`.delete-pop-btn`).style.display = "none";
        //---------------------------------------------------------------------
        document.querySelector(`.pop-input`).style.display = "block";

        // show popup
        popPop.style.display = "flex";
        //main list title
        let mainListTitle = listRenameBtn.target.parentElement.parentElement.parentElement.children[0]
        let mainListTitleClass = listRenameBtn.target.parentElement.parentElement.parentElement.children[0].classList[1].replace("list-Title-","")
        
        console.log(`mainListTitle : ${mainListTitle}`);
        console.log(`mainListTitleClass : ${mainListTitleClass}`);
        // Hide error
        document.querySelector("#error").style.display = "none";
        //Target rename button
        let renameBtn = document.querySelector(`#rename-pop`);

        renameBtn.addEventListener("click", (btn) => {
          // Get last entered value
          let lastIdx = inputText.length - 1;
          //Set id
          let id = inputText[lastIdx]
            ?.replaceAll(" ", "-")
            ?.replace(/[^a-zA-Z0-9\s-]/g, "");

          //Get inner HTML
          let innerhtml = inputText[lastIdx];
          //Check is it same
          //writen text and already writen text
          let isSame = listTitle.some((e) => {
            return e === innerhtml;
          });
          // Validate input
          if (innerhtml && isSame === false) {
            // Set current main list
            mainListTitle.innerText = inputText[lastIdx]
            popPop.style.display = "none";

          } else {
            // Show error
            document.querySelector("#error").style.display = "block";
          }
        });
      });
    });
  }

  let deleteBtn = document.querySelectorAll(".mainList-delete")
  if (deleteBtn) {
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", (listRenameBtn) => {
       
        //Show Rename popPop only
        document.querySelector(`.create-pop-text`).style.display = "none";
        document.querySelector(`.rename-pop-text`).style.display = "none";
        document.querySelector(`.delete-pop-text`).style.display = "block";
        // --------------------------------------------------------------------
        document.querySelector(`.create-pop-btn`).style.display = "none";
        document.querySelector(`.rename-pop-btn`).style.display = "none";
        document.querySelector(`.delete-pop-btn`).style.display = "block";
        //---------------------------------------------------------------------
        document.querySelector(`.pop-input`).style.display = "none";

        // show popup
        popPop.style.display = "flex";
        //main list title
        let mainListTitle = listRenameBtn.target.parentElement.parentElement.parentElement.children[0];
        let mainListTitleContainer = listRenameBtn.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        let mainListTitleClass = listRenameBtn.target.parentElement.parentElement.parentElement.children[0].classList[1].replace("list-Title-","");
        
        console.log(`mainListTitle : ${mainListTitle}`);
        console.log(`mainListTitleClass : ${mainListTitleClass}`);
        console.log(`mainListTitleContainer : ${mainListTitleContainer}`);

        //Target rename button
        let deleteBtn = document.querySelector(`.delete-pop-btn`);

        deleteBtn.addEventListener("click", (btn) => {
          // Get last entered value
          let lastIdx = inputText.length - 1;
          //Remove list
          mainListTitleContainer.remove()
          //Show popPOp
          popPop.style.display = "none";
        });
      });
    });
  }

  // Handle done button click
  //popPop done btn
  done.addEventListener("click", () => {
    //Hide error
    document.querySelector("#error").style.display = "none";
    let lastIdx;
    // Get last entered value
    lastIdx = inputText.length - 1;
    //Set id
    let id = inputText[lastIdx]
      ?.replaceAll(" ", "-")
      ?.replace(/[^a-zA-Z0-9\s-]/g, "");

    //Get inner HTML
    let innerhtml = inputText[lastIdx];
    //Check is it same
    //writen text and already writen text
    let isSame = listTitle.some((e) => {
      return e === innerhtml;
    });
    console.log(isSame);

    // Validate input
    if (innerhtml && isSame === false) {
      document.querySelector("#error").style.display = "none";
      // Hide popup
      popPop.style.display = "none";
      // Set current main list id
      // idOfMainList id

      // Add sidebar list item
      addSideList(sidebarListContain, innerhtml, id);

      // Add main list section
      addMainList(mainContainer, id, innerhtml);

      window.location.reload(); // Reload window to listen load lisner.
    } else {
      console.log(`innerhtml :${innerhtml}`);
      
      if (innerhtml === undefined ) {
        // Show error
        document.querySelector("#error").style.display = "none";
      }else{
        document.querySelector("#error").style.display = "block";

      }
    }

    // Reset input state
    inputText = [];
    popText.value = "";
  });
  // Cancel popPop
  let cancle = document.querySelector("#cancle");

  // Hide popup on cancel
  cancle.addEventListener("click", () => {
    popPop.style.display = "none";
  });
  // ----------------------------------------------------

  //Inner main list Tasks
  // ===================

  //To Hide no created Sms
  console.log(
    `overflowContainerInnerLenth ${overflowContainer.children.length}`,
  );

  if (overflowContainer.children.length > 0) {
    noCreatedSms.style.display = "none";
  }
  document.querySelectorAll(".Add-task-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Add task button clicked:", btn);
      console.log("Add task button id clicked:", btn.id);

      // We can add functionality here to handle adding a task
      //To make id
      let id = btn.id.replace("Add-task-btn-", "");
      //Target Empty Task
      let emptyTask = document.querySelector(`#empty-task-${id}`);
      //Target Completed Task
      let completedTask = emptyTask.parentElement.querySelector(
        `#completed-task-${id}`,
      );
      console.log(`completed Task ${completedTask}`);

      //Remove empty task message when adding a task
      emptyTask.style.display = "none";
      //Remove Completed task message when adding a task
      completedTask.style.display = "none";

      // Select the task container for the corresponding main list
      let taskContain = document.querySelector(`.task-container-${id}`);
      // Call function to add inner main list task
      InnerMainListTask(taskContain, id); // Add task to the specific main list
      // taskContain
      taskContain.style.display = "flex";

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
          // console.log(`title value ${value}`);
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
      const today = new Date().toISOString().split("T")[0];

      //For unable to select previous date:
      document.querySelectorAll(".task-date-input").forEach((input) => {
        input.min = today;
      });

      let selectedDate = [];
      // Array of dates
      document.querySelectorAll(".task-date-input").forEach((input) => {
        input.addEventListener("change", (e) => {
          const value = e.target.value;
          const Dates = new Date(value);
          let month = Dates.toLocaleString("en-US", { month: "short" });
          let day = Dates.toLocaleString("en-US", { weekday: "short" });
          let date = Dates.toISOString().split("T")[0].split("-")[2];

          console.log("month :", month);
          console.log("day :", day);
          console.log("date :", date);
          let arr = [day, month, date];
          selectedDate = arr;
        });
      });

      // --------------------------------
      // Today Button
      let todayBtn = document.querySelectorAll(".task-today-btn");
      // const Today = [];

      todayBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let today = new Date().toISOString().split("T")[0];
          let dateObj = new Date(today);
          let month = dateObj.toLocaleString("en-US", { month: "short" });
          let day = dateObj.toLocaleString("en-US", { weekday: "short" });
          let date = today.split("-")[2];

          console.log("month :", month);
          console.log("day :", day);
          console.log("date :", date);
          let arr = [day, month, date];
          selectedDate = arr;
        });
      });

      // --------------------------------
      // Tomorrow Button
      let tomorrowBtn = document.querySelectorAll(".task-tomorrow-btn");
      // const Tomorrow = [];
      //Track Tomorrow button click
      tomorrowBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let today = new Date();
          let tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
          let dateObj = new Date(tomorrow);

          let month = dateObj.toLocaleString("en-US", { month: "short" });
          let day = dateObj.toLocaleString("en-US", { weekday: "short" });
          let date = tomorrow.toISOString().split("T")[0].split("-")[2];

          console.log("month :", month);
          console.log("day :", day);
          console.log("date :", date);
          let arr = [day, month, date];
          selectedDate = arr;
        });
      });

      // --------------------------------
      // Done Button in innerList Task
      let doneBtn = document.querySelectorAll(`#done-btn-${id}`);
      //Track Done button click
      
      
      
      

      doneBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          console.log("Date", selectedDate);
          //Target day date month
          const day = btn.parentElement.parentElement.querySelector(".day");
          const month = btn.parentElement.parentElement.querySelector(".month");
          const date = btn.parentElement.parentElement.querySelector(".date");

          if ((day.innerText = selectedDate[0]) == undefined) {
            day.innerText = "";
            month.innerText = "";
            date.innerText = "";
          } else {
            day.innerText = selectedDate[0];
            month.innerText = selectedDate[1];
            date.innerText = selectedDate[2];
          }

          //Get Title
          let titleInput =
            btn.parentElement.parentElement.querySelector(".task-input-text");

          // console.log(`titleInput :${titleInput}`);

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
          //Set Details display and hide input
          detailDisplay.innerText = detailInput.value;

          //Change display states
          //inputs display
          let inputElements =
            btn.parentElement.parentElement.querySelectorAll(".inputs-display");
          //Elements display
          let displayElements =
            btn.parentElement.parentElement.querySelectorAll(".text-display");
          //Checkbox display
          let checkBoxDisplay =
            btn.parentElement.parentElement.parentElement.querySelectorAll(
              ".text-display",
            );
          //To Change the grid display of list task contain
          let listTaskContain = btn.parentElement.parentElement.parentElement;
          console.log("listTaskContain:", listTaskContain);
          //Set grid display for list task contain
          listTaskContain.style.display = "grid";
          //Set grid template columns
          listTaskContain.style.gridTemplateColumns = "auto 1fr auto";
          //Align items to center
          listTaskContain.style.alignItems = "center";

          // Hide inputs and show displays
          inputElements.forEach((el) => (el.style.display = "none"));
          displayElements.forEach((el) => (el.style.display = "block"));

          checkBoxDisplay.forEach((el) => {
            el.style.display = "block";
          });

          // -----------------------------------------

          let checkBoxCompleteTask =
            btn.parentElement.parentElement.parentElement.querySelector(
              ".task-check",
            );

          checkBoxCompleteTask.addEventListener("change", (cd) => {
            let checked = cd.target.checked;
            console.log(checked);
            if (checked) {
              //Target Current checked taskContain
              let taskItem =
                cd.target.parentElement.parentElement.parentElement
                  .parentElement;
              //taskContain display none
              taskItem.remove();
              let taskContainerLenght = document.querySelector(
                `.task-container-${id}`,
              ).children.length;
              console.log(`taskContainer inner length ${taskContainerLenght}`);
              if (taskContainerLenght === 0) {
                completedTask.style.display = "flex";
              }

              // -------------------------------------------------------------------
              // Add to completed task container
              let completedListContainer = document.querySelector(
                `.completed-list-container-${id}`,
              );

              //Show number of completed Tasks
              let numOfCompletedTask =
                completedListContainer.children.length + 1;

              //Target display
              let displayNumTask = document.querySelector(
                `#completed-num-${id}`,
              );
              //Show in display
              displayNumTask.innerText = numOfCompletedTask;

              //Invoked
              //To make Completed list
              addCompletedTask(completedListContainer, id);
              //Target Completed container
              let completedContainer = document.querySelector(
                `.complete-container-${id}`,
              );
              // change display
              completedContainer.style.display = "block";

              //Get current date
              const Today = new Date().toISOString().split("T")[0];
              const dateObj = new Date(Today);
              //Convert date into word
              let day = dateObj.toLocaleString("en-US", { weekday: "short" });
              let month = dateObj.toLocaleString("en-US", { month: "short" });
              let date = today.split("-")[2];
              console.log("Input Value :", titleInput.value);

              //Target Completed Title
              let completedTitle = document.querySelectorAll(
                `.completed-title[data-id="${id}"]`,
              );
              //Target All Completed Date contain
              let completedDateContain =
                document.querySelectorAll(".Date-container");
              //Target individual Completed Date contain
              let completedDateContainer =
                completedDateContain[completedDateContain.length - 1]
                  .children[1].children;

              //Date of completed container
              let cDay = completedDateContainer[0];
              let cMonth = completedDateContainer[1];
              let cDate = completedDateContainer[2];

              //Set date of completed Task
              cDay.innerText = day;
              cMonth.innerText = month;
              cDate.innerText = date;

              //Change Completed title innerText
              completedTitle[completedTitle.length - 1].innerText =
                titleInput.value;

              completedTitle.innerText = titleInput.value;
              console.log("completedTitle", completedTitle);
              // completedTitle.innerText = titleInput.value

              //Target the Delete btn completed tasks
              let deleteBtn = document.querySelectorAll(".delete-btn");
              deleteBtn.forEach((e) => {
                e.addEventListener("click", (el) => {
                  //Show in display Number Of completed Task
                  let completeList = el.target.parentElement.parentElement;
                  completeList.remove();
                  displayNumTask.innerText =
                    completedListContainer.children.length;
                  if (completedListContainer.children.length === 0) {
                    //To Hide container
                    completedContainer.style.display = "none";
                    //To Hide Completed Task img
                    completedTask.style.display = "none";
                    //To Show Empty Task img
                    emptyTask.style.display = "flex";
                  }
                });
              });

              //========================================
            }
          });
          //Now let's set in localStorage 
          //============================
          //To select main list
          // const mainList = btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
          // const mainListHtml = mainList.outerHTML
          // const mainListId = mainList.id
          // console.log("mainListid", mainList.outerHTML);
          // localStorage.setItem(`mainList-${mainListId}`,)
        });
      });


      let editBtn = document.querySelectorAll(`.task-edit-${id}`)

      editBtn.forEach((btn) => {
        btn.addEventListener("click",(e) => {
          console.log(`editBtn ${e}`);
          //to close dropDown
          let dropDown = btn.parentElement.parentElement.open = ''
          console.log(` dropDown ${dropDown}`);
          
          let inputElements =
            btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".inputs-display");
          let displayElements =
            btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".text-display");
            console.log(`inputElement ${inputElements}`);
            


          //To Change the grid display of list task contain
          let listTaskContain = btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            
          console.log(`checkBoxDisplay ${checkBoxDisplay}`);
          // Displays inputs and show inputs
          inputElements.forEach((el) => (el.style.display = "block"));
          displayElements.forEach((el) =>el.style.display = "none");
          // //To Hide container
          listTaskContain.style.display = "block";
        })
      })
      
      let deleteBtn = document.querySelectorAll(`.task-delete-${id}`)

      deleteBtn.forEach((btn) => {
        btn.addEventListener("click",(e) => {
          console.log(`deleteBtn ${e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}`);
        })
      })
      

    });


    //--------------------------------------------
  });
});

//======================================================
//Load From LocalStorage
//======================================================

window.addEventListener("DOMContentLoaded", () => {
  for (let key in localStorage) {
    // Load main lists
    if (key.startsWith("mainList-")) {
      mainContainer.insertAdjacentHTML("beforeend", localStorage.getItem(key));
    }

    // Load sidebar lists
    else if (key.startsWith("sideList-")) {
      sidebarListContain.insertAdjacentHTML(
        "beforeend",
        localStorage.getItem(key),
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
