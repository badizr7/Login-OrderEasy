import React, { useEffect, useState }from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

// importar archivos
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//importar iconos
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'



const Login = () => {
  // Usa el gancho de estado para almacenar entradas
  const[ loginEmail, setLoginEmail] = useState('')
  const[ loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //mostrar el mensaje al usuario
  const [loginStatus, setLogiStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

    // onclick obtener lo que el usuario ha ingresado
    const loginUser = (e)=>{

      //impedir el envío
    e.preventDefault();  
      // solicitar que Axios cree una API que se conecte al servidor para no instalarla
      Axios.post('http://localhost:3002/login', {
        // crear variable para enviar al servidor a través de la ruta
        LoginEmail: loginEmail,
        LoginPassword: loginPassword
      }).then((response)=>{
        console.log()
        // Primero captar la respuesta. Registramos los datos correctamente desde el datasE y podemos detectar un error si las credenciales son incorrectas.
        if(response.data.message || loginEmail == '' ||loginPassword == '' ){
          //si la credencial no coincide
          navigateTo('/Login') //entonces navegaremos a alguna página de inicio de sesión
          setLogiStatus('Credential dont exist!')
        }
        else{
          navigateTo('/dashboard') // si las credenciales coinciden, navegaremos al dashboard
         }
      })
    }


useEffect(()=>{
if(loginStatus !== ''){
  setstatusHolder('showMessage') //Mostrar mensaje
  setTimeout(() => {
    setstatusHolder('message')// ocultar si después de 4s
  }, 4000);
}
}, [loginStatus])


//borrar el formulario al enviarlo
const onSubmit = ()=> {
  setLoginEmail('')
  setLoginPassword('')
}

  return (
    <div className='loginPage flex'>
      <div className="contanier flex ">

        <div className="videoDiv">
        <video src={video} autoPlay muted loop></video> 

        <div className="textDiv">
          <h4 className='Tittle'> ¡Descubre la forma más cómoda y segura de comprar productos tecnológicos con nuestra página web!</h4>
          <p></p>
        </div>

        <div className="footerDiv flex">
          <span className="text">No tienes cuenta aun?</span>
          <Link to={'/register'}>
          <button className='btn'>Registrate aqui!</button>
          </Link>
        </div>
        </div>

        <div className="formDiv flex">
          <div className="headDiv">
            <img src={logo} alt="Logo" />
            <h3>Bienvenido!</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            {<span className={statusHolder}> {loginStatus}</span>}

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="email" id='email' placeholder='Ingrese su correo'onChange={(event)=>{
                  setLoginEmail(event.target.value)
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Ingrese su contraseña'onChange={(event)=>{
                  setLoginPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Iniciar sesión </span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
            olvidaste tu contraseña? <a className='forgotpassword' href="">Click Aqui</a>
            </span>
          </form>
        </div>      
      </div>
    </div>
  )
}

export default Login