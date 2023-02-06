import '../App.css';

function Header(){



    return (
        <header className='header'>
            <img className='chef-hat' src={require("../assets/images/chef-hat.png")} alt="" />
            <nav className='primary-nav'>
                <ul className='flex-nav' >
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">MENU</a></li>
                    <li><a href="">RESERVATIONS</a></li>
                    <li><a href="">ORDER ONLINE</a></li>
                    <li><a href="">LOG IN</a></li>
                </ul>
            </nav>

        </header>
    )
    
}

export default Header