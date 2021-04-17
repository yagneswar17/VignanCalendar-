var firebaseConfig = {
    apiKey: "AIzaSyDkEcaNjFAL84KTjwLQOvm81pYpj5u2wfE",
    authDomain: "longclawcalendar.firebaseapp.com",
    projectId: "longclawcalendar",
    storageBucket: "longclawcalendar.appspot.com",
    messagingSenderId: "888558233010",
    appId: "1:888558233010:web:744c4c825ea59eae09f0ab",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const auth = firebase.auth();
/*ui.start('#firebaseui-auth-container', {
    signInOptions: [
            firebase.auth.EmailAuthProvider.longclawcalendar
        ]
        // Other config options...
});
*/
function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    /*firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });*/
    var flag = 0;
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    /* if (promise.catch(e => alert(e.message))) {
         flag = 1;
     } else {
         alert("Signed Up Sucessfull!!!");
         window.open("Tmain.html");
     }*/
    promise.then(
        function(value) {
            alert("Signed Up Sucessfull!!!");
            window.open("Tmain.html");
        },

        function(error) {
            alert(error);
        }
    )
}

function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}