
import { useState, useEffect  } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./Login.css";
function Login() {
  const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('')
 
  useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('token')
		if (loggedUserJSON) {
			navigate("/admin")
		}
	}, [navigate])

  const handleRegister = async (event) => {
		try {

			axios({
				method: 'POST',
				url: `http://localhost:3000/user/Signin`,
				data: {
					email: email,
					password: password,
				
				}
			}).then(response => {
                console.log(response)
                if(response.data.token){
				window.localStorage.setItem("token", response.data.token)
				window.localStorage.setItem("id", response.data.user.id)
            window.location.reload();
            }
			}).catch(err => {
                console.log(err)
			if (err.response.status === 400 ||err.response.status === 401) {
			     alert(err.response.data.msg)

				}
			})
		} catch (e) {
			console.log("HandleRegister", e)
		}
	}


  return (
    <form onSubmit={"return false"}>
      <h2>Iniciar Sesion</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value) }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value) }}
          required
        />
      </div>
      <button type='button' onClick={handleRegister}>Entrar</button>
    </form>
  );
}

export default Login;