import React,{useEffect} from "react";



import ecommerce from "../../assets/img/ecommerce.jpeg";
import "./precio.css";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from "react";
import Axios from "axios";


function Precios() {
  //const[list, setList]=useState([]);

useEffect(() => {
  Aos.init({ duration: 2000 });
  /*Axios({url: "http://localhost/EpsiWeb/api/contact/precios.php"})
  .then((response)=>{
    setList(response.data.precios[0]);
    
  })
  .catch((error)=>{
    console.log(error);
  })*/
}, [/*setList*/]);




  return (
    <>
    
      <div className="bg-light" id="precios">
        
        <div className="container container-card">
          <div className="row gx-5 justify-content-center"  data-aos="fade-right">
            <div className="col-xl-8 text-mid">
              <div className="h2 fs-1 text-black">
                {/*list.titulo*/}dasdasd
              </div>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                {/*list.parrafo*/}sadasdas
              </p>
            </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card card-01">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop"
                    title="EpsiWeb-Price-1"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    {/*list.opcion1*/}dasdasd
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ {/*list.precio1*/}dasdas
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    Hosting Gratis y{" "}
                    <span style={{ display: "block" }}>Dominio por 1 año</span>
                  </p>

                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                    {/*list.descripcion1*/}dasdasd
                  </p>

                  
                  <a href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi Landing Page ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-1"><button style={{marginTop:"3rem"}} className="my-button"> Empezar</button></a>
                  

                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 ">
              <div className="card card-01 ">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop" 
                    title="EpsiWeb-Price-2"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    {/*list.opcion2*/}dasdas
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ {/*list.precio2*/}dasdasd
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    Hosting Gratis y{" "}
                    <span style={{ display: "block" }}>Dominio por 1 año</span>
                  </p>
                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                   {/*list.descripcion2*/}asdasd
                  </p>
                  <a href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi Web Basic ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-2"><button style={{marginTop:"3rem"}} className="my-button"> Empezar</button></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card card-01">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop"
                    title="EpsiWeb-Price-2"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title titulo-card display-4 lh-1 mb-4 "
                  >
                    {" "}
                    {/*list.opcion3*/}dasdasd
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ {/*list.precio3*/}asdasdas
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    Hosting Gratis y{" "}
                    <span style={{ display: "block" }}>Dominio por 1 año</span>
                  </p>
                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                    {/*list.descripcion3*/}sdasdas
                  </p>
                  <a  href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi E-Commerce ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-3"><button className="my-button"> Empezar</button></a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="container">
           <div className="row  justify-content-center"  >
            <div className="col-xl-6 text-mid">
            <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting h2 fs-2 text-black"
                  >
                   Además desarrollamos tu web a medida <span style={{display:"flex"}} >pedí tu cotización!!</span> 
                  </p>
             
              <p  className="lead fw-normal text-muted mb-5 mb-lg-0">
              <i  className="fa-solid fa-phone icon-feature text-gradient fs-5  ">+541132117480 / +541165623938</i>

             
              
              </p>
            </div>
          </div> 
        </div>
        </div>
       
      </div>
    
    
    </>
  );
}

export default Precios;
