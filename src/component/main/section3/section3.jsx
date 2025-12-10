import phone from '../section3/img/s3image.png'

import './section3.css'

function Section3() {

    return (
        <>
            <section className='s3 container'>
                <div className="kota66">
                    <img className='i88' src={phone} alt="" />
                    <div className="d14">
                        <h4 className='h13'>Create an account</h4>
                        <p className='p13'>Create/login to an existing account to get started</p>
                        <p className='p23'>An account is created with your email and a desired password</p>
                    </div>
                </div>
                <div className="kota66">
                    <div className="d14">
                        <h4 className='h13'>Explore varieties</h4>
                        <p className='p13'>Shop for your favorites meal as e dey hot.</p>
                        <p className='p23'>Shop for your favorite meals or drinks and enjoy while doing it.</p>
                    </div>
                    <img className='i88' src={phone} alt="" />
                </div>
                <div className="kota66">
                    <img className='i88' src={phone} alt="" />
                    <div className="d14">
                        <h4 className='h13'>Checkout</h4>
                        <p className='p13'>When you done check out and get it delivered.</p>
                        <p className='p23'>When you done check out and get it delivered with ease.</p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Section3;