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

function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var flag = 0;
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    /* if (promise.catch(e => alert(e.message))) {
         flag = 1;
     }
     if (flag == 0) {
         alert("Log In Sucessfull!!!");
         window.open("Smain.html");
     }*/
    promise.then(
        function(value) {
            alert("Log In Sucessfull!!!");
            window.open("Smain.html");
        },

        function(error) {
            alert(error);
        }
    )
}


function signOut() {

    auth.signOut();
    alert("Signed Out");
    window.open("Home.html");
}