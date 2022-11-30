import React,{ useEffect} from 'react'

import phone from '../../assets/img/phone.png'
import './mainsection.css'

import Aos from 'aos'
import "aos/dist/aos.css"
import Axios from "axios";
import { useState } from "react";

function MainSection() {
 // const[list, setList]=useState([]);
    useEffect(() => {
        Aos.init({duration: 2000});
       /* Axios({url: "http://localhost/EpsiWeb/api/contact/mainsection.php"})
  .then((response)=>{
    setList(response.data.mainsection[0]);
    
  })
  .catch((error)=>{
    console.log(error);
  })*/
     
     }, [/*setList*/]);
  return (
    <>
      <section id="service">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-8 order-lg-1 mb-5 mb-lg-0"
            >
              <div className="container px-5">
                <div className="row gx-5">
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">{/*list.titulo1*/}asdasd</h3>
                      <p className="text-muted mb-0">
                        {/*list.parrafo1*/}asdas
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                    <i class="bi bi-people-fill icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">{/*list.titulo2*/}sdasd</h3>
                      <p className="text-muted mb-0">
                        {/*list.parrafo2*/}sdsadas
                      </p>
                    </div>
                  </div>
                </div>
                <div className='container'>
                <div className="row">
                  <div className="col-md-6 mb-5 mb-md-0">
                    <div className="text-center">
                    <i class="bi bi-cash-coin icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">{/*list.titulo3*/}dasdas</h3>
                      <p className="text-muted mb-0">
                        {/*list.parrafo3*/}sadasd{" "}
                        <strong>e-commerce</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                    <i class="bi bi-graph-up icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">{/*list.titulo4*/}dasdasd</h3>
                      <p className="text-muted mb-0">
                        {/*list.parrafo4*/}dasdas{" "}
                        <strong>Google</strong>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12 order-lg-0">
              <img className="phone-main img-fluid" src={phone} alt="Movil-Phone" title='EpsiWeb-Main'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection