import React from 'react'
import './Register.css'
import '../../App.css'
import { Link, NavLink } from 'react-router-dom'

// import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

// import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className='videoVid'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>O Melhor site de Browser Games</h2>
            <p>Venha para melhor comunidade de gamers!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Possui cadastro?</span>
            <Link to={'/'}>
            <button className='btn'>Entre</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo Image' />
            <h3>Diga-nos quem você é!</h3>
          </div>

          <form action='' className='form grid'>

            <div className='inputDiv'>
              <label htmlFor='email'>E-mail</label>
              <div className='input flex'>
                <MdMarkEmailRead  className='icon' />
                <input
                  type='email'
                  id='email'
                  placeholder='Insira seu e-mail'
                />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='username'>Usuario</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Insira seu usuário'
                />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Senha</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input
                  type='password'
                  id='password'
                  placeholder='Insira sua senha'
                />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgotPassword'>
              Esqueceu sua senha? <a href='#'>Clique aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;