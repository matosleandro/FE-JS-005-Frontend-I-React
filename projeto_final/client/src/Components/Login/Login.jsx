import React from "react";
import "./Login.css";
import "../../App.css"
import { Link, NavLink } from "react-router-dom";

// import assets
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// import icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoVid">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">O Melhor Site de Browser Games</h2>
            <p>Venha para melhor comunidade de gamers!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Ainda não possui conta?</span>
            <Link to={"/register"}>
              <button className="btn">Cadastre-se</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Bem-vindo</h3>
          </div>

          <form action="" className="form grid">
            <span>Login Status</span>
            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Insira seu usuário"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Insira sua senha"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Esqueceu sua senha? <a href="">Clique aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;