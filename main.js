const singupform = document.querySelector('#singup');

singupform.addEventListener('submit',(e)=> {
 e.preventDefault();
 const email = document.querySelector('#singup-email').value;
 const password = document.querySelector('#singup-password').value;

 auth
 .createUserWithEmailAndPassword(email, password)
 .then(userCredential => {
singupform.reset();


$("#singupModal").modal("hide");
location.href="../menu.html";

   console.log("Registrado")
 })
});

 
//incio se sesion
const signinForm = document.querySelector("#login-form");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  // Authenticate the User
  auth
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // clear the form
    signinForm.reset();
    // close the modal  
    location.href="../menu.html";
    $("#signinModal").modal("hide");
    
    console.log("Registrado")

  });
});


// Logout
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signup out");
 
  });
});



// Login with Google
const googleButton = document.querySelector("#googlelogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
    location.href="../menu.html";

  })
  .catch(err => {
    console.log(err);
  })
});