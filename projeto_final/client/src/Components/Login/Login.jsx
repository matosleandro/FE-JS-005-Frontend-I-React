import React from 'react'
import './Login.css'
import { Link, NavLink } from 'react-router-dom'

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

const Login = () => {
  return (
    <div className='loginPage flex'>
    <div className='container flex'>
        <div className='videoVid'>
            <video src={video} autoPlay muted loop></video>

            <div className='textDiv'>
            <h2 className='title'>O Melhor Site de Browser Games</h2>
            <p>Venha para melhor comunidade de gamers!</p>
        </div>

        <div className='footerDiv flex'>
            <span className='text'>Ainda não possui conta?</span>
            <Link to={'/register'}>
            <button className='btn'>Cadastre-se</button>
            </Link>
        </div>
        </div>

        <div className='formDiv flex'>
            <div className='headerDiv'>
                <img src={logo} alt='Logo Image' />
                <h3>Bem-vindo</h3>
            </div>

            <form action='' className='form grid'>
                <span>Login Status</span>
                <div className='inputDiv'>
                    <label htmlFor='username'>Usuario</label>
                    <div className='input flex'>
                        <FaUserShield className='icon' />
                        <input type='text' id='' />
                    </div>
                </div>
            </form>
        </div>

    </div>
    </div>
  )
}

export default Login