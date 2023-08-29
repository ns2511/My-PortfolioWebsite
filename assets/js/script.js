'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }
//   });
// }

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

//contact form send to mail
function sendmail(){
  var fullname =" naresh";
  var email = "naresh@gmail.com"
  var message = "this is message"

  var Body = 'Name: '+ fullname + '<br>Email: ' +email+ '<br>Message: ' +message;
  console.log("this is sendmail function called!");

Email.send({
  Host : "smtp.gmail.com",
  Username : "naresh.saini2511@gmail.com",
  Password : "iwdnfaawrqtttccv",
  To : 'andmsaini143@gmail.com',
  From : "naresh.saini2511@gmail.com",
  Subject : "New message on nareshsaini.com from: " + fullname,
  Body : Body
  
}).then(
message => {
  console.log("this is email send function");
  if(message == 'OK'){
    alert('Thank You Your Message has been send. Thank you for connecting.')
  }else{
    console.error(message);
    alert('There is error at sending message.')
  }
});
}

function alrt(){
  alert('this is alrt function');
}