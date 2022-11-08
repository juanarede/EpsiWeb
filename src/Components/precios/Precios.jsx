import {React,useEffect, useState} from "react";

import ecommerce from "../../assets/img/ecommerce.jpeg";
import "./precio.css";
import Aos from 'aos'
import "aos/dist/aos.css"
import Form from "../form/Form";

function Precios() {
useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);



  return (
    <>
      <div className="bg-light" id="precios">
        <div className="container container-card">
          <div className="row gx-5 justify-content-center"  data-aos="fade-right">
            <div className="col-xl-8 text-mid">
              <div className="h2 fs-1 text-black  ">
                Elegí el plan que se adapte a tus necesidades
              </div>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
               Una vez que hayas seleccionado una opción nos pondremos en contacto. 
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card card-01">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    Landing Page
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ 13000.00
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
                    Ideal para presentar tu negocio o tu intereses, podrás promocionar tu marca y atraer mas clientes potenciales, con diseño responsive. Tu sitio mas seguro con certificado SSL.
                  </p>
                  <button >Empezar</button>
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
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    Web Basic
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ 20000.00
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
                   Sitio web para pequeñas tiendas, capacidad para hasta 20 imagenes con 4 secciones distintas, con diseño responsive. Tu sitio mas seguro con certificado SSL.
                  </p>
                  <button>Empezar</button>
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
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title titulo-card display-4 lh-1 mb-4 "
                  >
                    {" "}
                    E-commerce
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ Consultar
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
                    Tu tienda online, con varias secciones e imagenes segun tus requerimientos, plataforma de pagos (Mercado Pago) y, por supuesto, diseño responsive. Potencia tus ventas de la forma mas profesional. Tu sitio web mas seguro con certificado SSL.
                  </p>
                  <button>Empezar</button>
                </div>
              </div>
            </div>
          </div>
           <div className="row  justify-content-center"  >
            <div className="col-xl-6 text-mid">
            <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting h2 fs-2 text-black"
                  >
                   Además desarrollamos tu web a medida <span style={{display:"flex"}} >pedí tu cotización!!</span> 
                  </p>
             
              <p  className="lead fw-normal text-muted mb-5 mb-lg-0">
              <i  className="fa-solid fa-phone icon-feature text-gradient fs-5  ">+541132117480 / +5491165623938</i>

             
              
              </p>
            </div>
          </div> 
        </div>
        
      </div>
     <Form/>
    
    </>
  );
}

export default Precios;
