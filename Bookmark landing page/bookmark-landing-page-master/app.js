const bookmark = document.querySelector('.note');
const bookmark2 = document.querySelector('.alert');
const matches = document.querySelector(".section-bookmarks");
const showBookmarks = document.querySelector('.container-body');
const hamburgerHandler = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('.main-nav-slide');

matches.addEventListener('click',() =>{
    matches.classList.toggle('section-bookmarks');
     matches.classList.toggle('toggler')
    showBookmarks.classList.toggle('container-body')
  showBookmarks.classList.toggle('bookmark-revealer')
} )



bookmark2.addEventListener('click', () => {
    bookmark2.classList.toggle('alert');
    bookmark2.classList.toggle('toggler');
    showBookmarks.classList.toggle('container-body')
    showBookmarks.classList.toggle('bookmark-revealer')

})

bookmark.addEventListener('click', () => {
 
    bookmark.classList.toggle('note');
    bookmark.classList.toggle('toggler')
    showBookmarks.classList.toggle('container-body')
    showBookmarks.classList.toggle('bookmark-revealer')
})
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    event.preventDefault();
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Incorrect e-mail address!, Try Again!");
    } else {
        email.setCustomValidity("");
    }
});


hamburgerHandler.addEventListener('click',()=>{
navBar.style.display = 'block';
})

closeNav.addEventListener('click', () => {
    navBar.style.display = 'none';
})



// const inputVal = document.querySelector('input');
// 
// function ValidateEmail() {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputVal.value.match(mailformat)) {
//         return true;
//     }
//     else {
//         // alert("You have entered an invalid email address!");
//         const myVal = document.createElement('div')
//      myVal.innerHTML = `
//      <h2>Invalid Email,try Again</h2>
//      `
      
//      label.append(myVal);
    
//     }
// return 
// }







