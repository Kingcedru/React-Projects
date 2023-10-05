import logo from "./assets/react.svg"
import './index.css'

function Header(){
    return (
        <div className="header">
            <div className="logos">
                <img className ='im' src={logo}></img>
                <h1 className="Htitle">React Facts</h1>
            </div>
            <h2 className="Htitle2">React Course - Project 1</h2>
        </div>
    )
}

export default Header