import './index.css'
import rea from './assets/reactjs-icon 2.png'
function MainContent(){
    return (
        <div className='content'>
            <h1 className='Ctitle'>Fun facts about React</h1>
            <div className='LImages'>
                <ul className='Ulists'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={rea}></img>
            </div>
        </div>
    )
}

export default MainContent