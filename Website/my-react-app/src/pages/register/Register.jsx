import "./register.css";

export default function Register() {
  return (
    
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RedConnect</h3>
          <span className="loginDesc">
          Your World, Your Connections <br/>—Log In to RedConnect!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInputReg" />
            <input placeholder="Email" className="loginInputReg" />
            <input type="password" placeholder="Password" className="loginInputReg" />
            <input type="password" placeholder="Password Again" className="loginInputReg" />
            <button className="loginButtonReg">Sign Up</button>
            <button className="loginRegisterButtonReg">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}