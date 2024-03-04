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

// freeloader

let loader = document.querySelector(".loaderContainer");

window.addEventListener("load", nawala);

function nawala(){
    loader.classList.add("disppear");


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



// text effect to hero design
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `I'm <span class="textWrapHero">${this.txt}</span>` ;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

};

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('jsonDataContainer');
  
    // Fetch the local JSON data
    fetch('../js/myProjectData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => {
        // Create a container for the card boxes
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('myworkCardContainer');

        
  
        // Iterate through the JSON data
        jsonData.forEach(project => {
          // Create a card box for each person
          const card = document.createElement('div');
          card.classList.add('card');
  
          // Populate the card box with person data
          card.innerHTML = `

          <div class="myworkCard filterDiv show ${project.projectType}" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                <img src="${project.projectPicture}" alt="sampleCard">
                <div class="myworkCardInfo">
                    <h2>${project.projectName}</h2>
                    <p>${project.projectDeatils}</p>
                    <a href="${project.link}" target="_blank"><button>Check Demo</button></a>
                </div>
            </div>

          `;
  
          // Append the card box to the container
          cardContainer.appendChild(card);
        });
  
        // Append the card container to the main container
        container.appendChild(cardContainer);
      })
      .catch(error => {
        console.error('Error fetching or processing JSON data:', error);
      });
  });



  

// slick

$(document).ready(function(){
  $('.porfolioImgContainer').slick({
    dots: true,
  infinite: true,
  speed: 200,
  fade: false,
  cssEase: 'linear'
    });
  });

  