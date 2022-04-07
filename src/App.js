import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app)
function App() {
  const [user, setUser] =useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn =()=>{
   signInWithPopup(auth, googleProvider)
   .then((result)=>{
    const user = result.user;
    setUser(user)
    console.log(user)
   })
   .catch((error) => {
     console.log('error', error)
   })
  }
  const handleGithubSignIn = ()=>{
  signInWithPopup(auth, githubProvider)
  .then((result)=>{
    const user = result.user;
    setUser(user)
    console.log(user)
   })
   .catch((error) => {
     console.error( error)
   })
  }
  const handleSingOut= ()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch((error)=>{
      setUser({})
    })
  }
  return (
    <div className="App">
    
      <h2>{user.displayName}</h2>
      <p> {user.email}</p>
      {user.photoURL ? <img src={user?.photoURL} height="300px" width='230px' alt="" />
      : console.log('no pic')}
    
      <br />
      {user.email ?
      <button onClick={handleSingOut}>Sign Out</button> :
      <>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <button onClick={handleGithubSignIn}>Github sign in</button>
      </>
      
      }
    </div>
  );
}

export default App;
