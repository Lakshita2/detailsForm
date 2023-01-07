const firebaseConfig = {
    apiKey: "AIzaSyBdvrMFCvBLmCZxXNjx15-OBKmKN-325GM",
    authDomain: "detailsform-810b1.firebaseapp.com",
    databaseURL: "https://detailsform-810b1-default-rtdb.firebaseio.com",
    projectId: "detailsform-810b1",
    storageBucket: "detailsform-810b1.appspot.com",
    messagingSenderId: "498327692586",
    appId: "1:498327692586:web:7a419336ac67b501e4aa53"
  };

  firebase.initializeApp(firebaseConfig);
// reference your database
var detailsFormDB = firebase.database().ref("detailsform");

document.getElementById("myForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var book = getElementVal("book");
  var author = getElementVal("author");


  saveMessages(name, emailid, book, author);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, book, author) => {
  var newdetailForm = detailsFormDB.push();

  newdetailForm.set({
    name: name,
    emailid: emailid,
    book: book,
    author:author

});
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};