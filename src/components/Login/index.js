import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Login = ({ history }) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')

    const [btn, setBtn] = useState(false);

    useEffect(() => {
        if (password.length >5 && email !== ''){
            setBtn(true)
        }else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = (e) =>{
        e.preventDefault();
        firebase.loginUser(email, password)
        .then(user =>{
            setEmail('');
            setPassword('');
            history.push('/welcome');
        })
        .catch(error =>{
            setErrorMsg(error);
            setEmail('');
            setPassword('');
        })

    }
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
              {errorMsg !=='' && <span>{errorMsg.message}</span>}
            <h2>connexion</h2>
            <form onSubmit={handleSubmit}>

              <div className="inputBox">
                <input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de Passe</label>
              </div>

                {btn ? <button style={{backgroundColor:'red'}}>Connexion</button> : <button disabled>Connexion</button>}

            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.
              </Link>
              <br />
              <Link className="simpleLink" to="/forgetpassword">
                Mot de passe oublié? Récupérez-le ici.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
