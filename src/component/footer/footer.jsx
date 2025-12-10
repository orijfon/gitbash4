import img from '../footer/img/logo.png'
import inst from '../footer/img/inst.png'

import './footer.css'


function Footer() {

    return (
        <>
            <footer className='container'>
                <a className='a1' href=""><img src={img} alt="" /></a>
                <div className="social">
                    <a className='inst' href=""><img src={inst} alt="" /></a>
                    <a className='inst' href=""><img src={inst} alt="" /></a>
                    <a className='inst' href=""><img src={inst} alt="" /></a>
                </div>
                <a href=""><p className='bio'>Copywright 2020 Bella Onojie.com</p></a>
            </footer>
        </>
    )
}

export default Footer;
