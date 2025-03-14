
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA-lFuR1JkxV-gT8TZZmx-SMLXQELIKnR8",
    authDomain: "sign-up-log-in-form-2771e.firebaseapp.com",
    databaseURL: "https://sign-up-log-in-form-2771e-default-rtdb.firebaseio.com",
    projectId: "sign-up-log-in-form-2771e",
    storageBucket: "sign-up-log-in-form-2771e.firebasestorage.app",
    messagingSenderId: "462822975889",
    appId: "1:462822975889:web:157377cf426fa554a35230",
    measurementId: "G-TEM6MJB6W9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  const counterRef = ref(db , "counter");

  function updateCounter(value){
    set(counterRef , value);
  }

  document.getElementById("increment").addEventListener("click" , function (e){
    e.preventDefault();

    let count = Number(document.getElementById("counter-value").innerText);
    updateCounter(count + 1);
  });


  document.getElementById("decrement").addEventListener("click", function (e){
    e.preventDefault();

    let count = Number( document.getElementById("counter-value").innerText);
    updateCounter(count - 1);
  });


  onValue(counterRef , function(snapshot){
    document.getElementById('counter-value').innerText=snapshot.val();
  });

