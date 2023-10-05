import logo from './assets/Logo.png'
function Header(){
    return(
        <div className="bg-[#672280]">
            <div className="logo flex justify-between px-8 py-5">
                <img src={logo}></img>
                <h1 className='text-white'>React Course - Project 3</h1>
            </div>
        </div>
    )
}
export default Header;