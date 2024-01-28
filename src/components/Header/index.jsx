import "./index.css";
import logo from "../img/logo.svg"

export default function Header () {
  
    return (
      <>
       <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Locations</li>
            <li>FAQ’s</li>
          </ul>
          <button>Contact Us</button>
        </div>
       </div>
      </>
    )
}
