// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCC82dQdNq6EcFrqUsuBVzva8eXp2QRfwk",
    authDomain: "form-35f20.firebaseapp.com",
    databaseURL: "https://form-35f20.firebaseio.com",
    projectId: "form-35f20",
    storageBucket: "form-35f20.appspot.com",
    messagingSenderId: "117217152787",
    appId: "1:117217152787:web:628b082ee8d9cf429794e6",
    measurementId: "G-TX6T5JMET3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}