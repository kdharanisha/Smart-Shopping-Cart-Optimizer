// Get modal elements
var signInModal = document.getElementById('signInModal');
var signUpModal = document.getElementById('signUpModal');

// Get buttons to open modals
var signInBtn = document.getElementById('signInBtn');
var signUpBtn = document.getElementById('signUpBtn');

// Get elements to close modals
var closeSignIn = document.getElementById('closeSignIn');
var closeSignUp = document.getElementById('closeSignUp');

// Get links to switch between Sign In and Sign Up modals
var openSignUp = document.getElementById('openSignUp');
var openSignIn = document.getElementById('openSignIn');

// Open Sign In modal
signInBtn.onclick = function() {
  signInModal.style.display = "block";
}

// Open Sign Up modal
signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
}

// Close Sign In modal
closeSignIn.onclick = function() {
  signInModal.style.display = "none";
}

// Close Sign Up modal
closeSignUp.onclick = function() {
  signUpModal.style.display = "none";
}

// Switch to Sign Up modal from Sign In modal
openSignUp.onclick = function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}

// Switch to Sign In modal from Sign Up modal
openSignIn.onclick = function() {
  signUpModal.style.display = "none";
  signInModal.style.display = "block";
}

// Close modal if clicked outside of modal content
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}
