import image from '../section2/img/telefon.png'

import './section2.css'

function Section2() {

    return (
        <>
            <section className='s2 container'>
                <img className='i1' src={image} alt="" />
                <h2 className='t'>How the app works</h2>
            </section>
        </>
    )

}

export default Section2;