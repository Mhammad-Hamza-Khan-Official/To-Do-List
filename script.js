let hamberger = document.querySelector("#hamberger");

let sidebar = document.querySelector(".sidebar");

let sidebarOpen = true;

hamberger.addEventListener("click", () => {
  if (sidebarOpen) {
    sidebar.style.width = "100%";
    sidebar.style.padding = "0px 30px";
    sidebar.style.borderRight = "1px solid rgb(48, 48, 48)";
    sidebarOpen = false;
  } else {
    sidebar.style.width = "0px";
    sidebar.style.padding = "0px";
    sidebar.style.border = "0px";
    sidebarOpen = true;
  }
});


// ------------------------------------------------
  const addMainList = (container ,id ,innerhtml,checked) => {
    if (checked) {
      let mainList = `<!-- ----------------------------------------------- -->
            <div class="task-content-container" id="${id}">
              <!-- --------------------main-content -->
               <div class="main-contain  h-full  flex  justify-center  ">
                <div class="contain-content  ">
                  <div class="contain  ">
                    <div class="head flex flex-col gap-5">
                      <div class="head flex items-center justify-between ">
                        <h3>${innerhtml}</h3>
                        <span class="img-circle flex justify-center items-center">
      
                          <img src="./assets/icons/Dots.svg" alt="" class=""/>
                        </span>
                      </div>
                      <div class="add-task flex items-center gap-4">
                        <img src="./assets/icons/WhiteTick.svg" alt="" />
                        <p>Add a task</p></div>
                      </div>
      
                      <div class="List-content flex flex-col justify-center items-center h-full  mt-5">
                        <!-- -------------------No tasks yet -->
                        <div class="empty-task flex
                        justify-center items-center" id="empty-task">
                          <div class="content flex flex-col justify-center items-center" id="content">
                            <img src="./assets/image/NoAnyTasks.svg" alt="" class="no-task-img" id="no-task-img"/>
                            <h3 id="no-task-heading" class="text-base">No starred tasks</h3>
                            <p id="no-task-paragraph" class="text-sm">
                              Mark important tasks with a star so you can easily find them here
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
               </div>
            </div>`
  
      container.insertAdjacentHTML("beforeend",mainList)
    }else if(!checked){
      console.log("not checked");
      console.log(
        document.querySelectorAll(`#${id}`)
      );

      let value = document.querySelectorAll(`#${id}`)[1]
      console.log("value :",value);
      
      if (value === undefined) {
        document.querySelectorAll(`#${id}`)[0].remove()
        console.log("document.querySelectorAll(`#${id}`)[0].remove()");
        
      }else{
        value.remove()
      }
      
    }

  }

// ----------------------------------------------------
let sidebarListContain = document.querySelector("#check-lists");

let inputCheckBox = document.querySelectorAll(".sideCheckBox");

let mainContainer = document.querySelector("#main-container")



const addSideList = (container, innerhtml) => {
  let id = innerhtml
  let inputValue = id;

  let inputCD = `<div class="flex items-center gap-2 sidebar-btn-w">
                  <input type="checkbox" name="" id=${id} class="sideCheckBox" value=${inputValue} >
                  <label for=${id} class="text-sm ">${innerhtml}</label>
                </div>`;

                    container.insertAdjacentHTML("beforeend", inputCD)

let newInputCheckBox = document.querySelector(`#${id}`)

newInputCheckBox.addEventListener("change", (cd) => {
    console.log("clicked :",cd.target.checked);
    let checked = cd.target.checked;
    let id = cd.target.value
    let innerhtml = cd.target.labels[0].innerText
    console.log("cd.target.value :",cd.target.value); // checkbox value
    console.log(cd.target.labels[0].innerText);
    addMainList(mainContainer,id,innerhtml,checked)
    // label text
    
  });

      return(inputCD);
                };
                  
                  
                  
let inputText = []
let popPop = document.querySelector(".pop-container")
let createListBtn = document.querySelector("#create-list-btn")
let popText = document.querySelector("#pop-text")
let done = document.querySelector("#done") //btn


//Show popPop
createListBtn.addEventListener("click",() => {
  popPop.style.display = "flex"
  done.style.color = "grey"
})

//to track input value
popText.addEventListener("input",() => {
  if (popText.value === "") {
    done.style.color = "grey"
  }else{
    done.style.color ="rgb(58, 127, 238)"
  }
  
  inputText.push(popText.value)
  
})

// To checked or not 
inputCheckBox.forEach((e) => {
  e.addEventListener("change", (cd) => {
    console.log("clicked :",cd.target.checked);
    let checked = cd.target.checked;
    let id = cd.target.value
    let innerhtml = cd.target.labels[0].innerText
    console.log("cd.target.value :",cd.target.value); // checkbox value
    console.log(cd.target.labels[0].innerText);
    addMainList(mainContainer,id,innerhtml,checked)
    // label text
    
  });
});


// Done
let lastIdx ;
done.addEventListener("click",() => {
  console.log("inputTexts :",inputText);
  lastIdx = inputText.length -1;
  // console.log("string upper:",string);
  if ((inputText[lastIdx] != undefined) && (inputText[lastIdx] != "")) {
    
    popPop.style.display = "none"
    addSideList(sidebarListContain,inputText[lastIdx])
    
  }
  inputText = []
  popText.value = "";
  console.log("pop-input :",popText);
  
})

//Cancle
let cancle = document.querySelector("#cancle")

  
cancle.addEventListener(("click"),() => popPop.style.display = "none")

  // inputCheckBox.forEach((e) => {
  //   e.addEventListener("change", (cd) => {
  //     console.log("clicked");
  //     console.log(cd.target.value); // checkbox value
  //     console.log(cd.target.labels[0].htmlFor);
  //     // label text
      
  //   });
  // });

