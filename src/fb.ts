import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "604305721430"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BKFsPwSmzXQpXBorsxzhyRQpc7A8LkmROYLil1pjSdib29mrwjfiQWOZwzL4VqgrPZqunljZpgku7PU784NPUAk"
);

export { messaging };