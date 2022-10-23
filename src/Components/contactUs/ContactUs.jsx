import { React, useEffect} from 'react'
import './contactus.css'

import Aos from 'aos'
import "aos/dist/aos.css"

function ContactUs() {

  useEffect(() => {
    Aos.init({duration: 2000})
 
 }, []);
  return (
    <>
         <section className="cta">
            <div className="cta-content">
                <div data-aos="fade-right" className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Mas informacion?
                        <br />
                        No hay problema...
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="" target="_blank">Contact Us</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs