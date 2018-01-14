$(document).ready(function () {

  var provider = new firebase.auth.FacebookAuthProvider();

  function facebook() {
    if (!firebase.auth().currentUser) {


      provider.addScope('public_profile');

      firebase.auth().signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var name = result.user.displayName;
          console.log('usuario activo');
          window.location.href = '../views/search-place.html';
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
});