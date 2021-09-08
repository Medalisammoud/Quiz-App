import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCaCHN5m5-6vT03Q5JPw2ZdKEzlpH9JNQY",
    authDomain: "marvel-quiz-c969c.firebaseapp.com",
    projectId: "marvel-quiz-c969c",
    storageBucket: "marvel-quiz-c969c.appspot.com",
    messagingSenderId: "362723214246",
    appId: "1:362723214246:web:78fd3c31a10f3ac2dc0567"
  };

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    

    //Connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //Déconnexion
    signoutUser = () =>
        this.auth.signOut();

    //Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    // firestore
    user = uid => this.db.doc(`users/${uid}`);
}


export default Firebase;