// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyA2NUeACQ5WTM1h22RI3ySaOau34x2uboY",
  authDomain: "aspire-job-portal-7cf3a.firebaseapp.com",
  projectId: "aspire-job-portal-7cf3a",
  storageBucket: "aspire-job-portal-7cf3a.appspot.com",
  messagingSenderId: "637365006907",
  appId: "1:637365006907:web:c6978c99fe19e996cf221e",
  measurementId: "G-717CZBQCFR",
};


// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './vercel.svg',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
