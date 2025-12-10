import logo from '../../assets/logo.png'

import './header.css'

function Header() {

    return (
        <>
            <header className='container'>
                <a className='a1' href=""><img src={logo} alt="" /></a>
                <div className="d1">
                    <a className='link' href="">Home</a>
                    <a className='link' href="">Product</a>
                    <a className='link' href="">Faq</a>
                    <a className='link' href="">Contact</a>
                </div>
            </header>
        </>
    )

}

export default Header;