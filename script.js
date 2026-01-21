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

let sidebarListContain = document.querySelector("#check-lists");

let inputCheckBox = document.querySelectorAll(".sideCheckBox");



const addSideList = (container, innerhtml) => {
  let id = innerhtml
  let inputValue = id;

  let inputCD = `<div class="flex items-center gap-2 sidebar-btn-w">
                  <input type="checkbox" name="" id=${id} class="sideCheckBox" value=${inputValue} >
                  <label for=${id} class="text-sm ">${innerhtml}</label>
                </div>`;

                    container.insertAdjacentHTML("beforeend", inputCD)

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


inputCheckBox.forEach((e) => {
  e.addEventListener("change", (cd) => {
    console.log("clicked");
    console.log(cd.target.value); // checkbox value
    console.log(cd.target.labels[0].htmlFor);
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