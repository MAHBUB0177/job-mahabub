// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import FirebaseConfig from '../utils/FirebaseConfig'


// export const initializefirebase=()=>{
//   firebase.initializeApp(FirebaseConfig);

// }

// export const handleGoogleSignIn = () => {
// var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       console.log('google login data ',res)
//       console.log(res.additionalUserInfo.profile.email)
//       console.log(res.credential.accessToken)
//       // window.location.href='/checkout'
     
//     })
//     .catch(err => {
//       const errorMessage = err.message;
//       console.log(errorMessage)

//     })
// };


// export const handelSignOut = () => {
//   console.log('ok')
//   firebase.auth().signOut()
//     .then(res => {
     
//     })
// }