// onscroll navBar
const navbar = document.querySelector('.flex-area');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// open and close Nav
const openNav=()=> {
    document.getElementById("myNav").style.width = "100%";
}
const closeNav=()=> {
    document.getElementById("myNav").style.width = "0%";
}


//filter my project
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}


// json project
// let outputEl = document.querySelector(".myworkCardContainer");

// const projectList =()=>{
//     fetch('js/project.json')
//     .then((res) => res.json())
//     .then((dataUser) => {
//         let output = ''
//         dataUser.forEach(function(project){
//             output += `
//             <div class="myworkCard filterDiv ui">
//                 <img src="${project.pictureProject}">
//                 <div class="myworkCardInfo">
//                     <h2>Landing Page</h2>
//                     <p>This is a sample design
//                     Card</p>
//                     <button>Check Demo</button>
//                 </div>
//             </div>
//             `
//         })
//         outputEl.innerHTML = output
//     })
// }

// projectList();

function openSkills(evt, skillName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "flex";
    evt.currentTarget.className += " active";
  }



