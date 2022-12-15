import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getFirestore, doc, setDoc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBledOOmtHFzHg3KOiIX4qJ5IsiIJ0ZB8w",
    authDomain: "finalmobileapp-2f76d.firebaseapp.com",
    databaseURL: "https://finalmobileapp-2f76d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "finalmobileapp-2f76d",
    storageBucket: "finalmobileapp-2f76d.appspot.com",
    messagingSenderId: "179425491077",
    appId: "1:179425491077:web:0c6ed4b4231d718e4e91ec",
    measurementId: "G-HQPK06Z5F8"
});

const db = getFirestore();



const contactForm = collection(db, 'Msg');
const formstatus = document.querySelector(".contact_form");
const fname = document.querySelector(".Fname");
const lname = document.querySelector(".Lname");
const email = document.querySelector(".email");
const msg = document.querySelector(".msg");
const submit = document.querySelector(".btn-submit");
var modal = document.querySelector(".contact-modal");
var close = document.querySelector(".btn-close");
let date = new Date().toLocaleDateString();


function write(){

    const docdata = addDoc(contactForm, {
        D_T : date,
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        msg : msg.value,
    });
    
}
submit.addEventListener("click", (e) =>{
    e.preventDefault();
    write();
    console.log(fname.value, lname.value, email.value, msg.value);
    formstatus.reset();
    modal.style.display = "flex";
});

close.addEventListener('click', ()=> {
    modal.style.display = "none";
    console.log("press");
});


