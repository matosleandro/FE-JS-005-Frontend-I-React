import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

// import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

// import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  // useState
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

  // onClick
  const loginUser = (e)=>{
    // Evitar a submissão.
    e.preventDefault();
    // Utilize o Axios para criar uma API e se conectar ao servidor.
    Axios.post('http://localhost:3002/login', {
      // Criar uma variável para enviar ao servidor por meio da rota.
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response)=>{
      console.log()
      if(response.data.message || loginUserName == '' || loginPassword == ''){
        navigateTo('/')
        setLoginStatus(`Você não possui cadastro`)
      }
      else{
        navigateTo('/painel')
      }
    })
  }

  useEffect(()=>{
  if(loginStatus !== ''){
    setstatusHolder('showMessage') // Exibir mensagem.
    setTimeout(() => {
      setstatusHolder('message') // Ocultar após 4 segundos.
    }, 4000);
  }
  }, [loginStatus])

  // Limpar o formulário ao enviar.
  const onSubmit = () => {
    setLoginUserName('')
    setLoginPassword('')
  }

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoVid'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>O Melhor site de Browser Games</h2>
            <p>Venha para melhor comunidade de gamers!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Ainda não possui cadastro?</span>
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

          <form className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className='inputDiv'>
              <label htmlFor='username'>Usuário</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Insira seu usuário'
                  onChange={(event)=>{
                    setLoginUserName(event.target.value)
                  }}
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
                  onChange={(event)=>{
                    setLoginPassword(event.target.value)
                  }}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Entrar</span>
              <AiOutlineSwapRight className='icon' />
            </button>
            
            <a href="/painel">Painel</a>

            <span className='forgotPassword'>
              Esqueceu sua senha? <a href='#'>Clique aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;