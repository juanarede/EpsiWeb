import {React,useEffect} from "react";

import ecommerce from "../../assets/img/ecommerce.jpeg";
import "./precio.css";
import Aos from 'aos'
import "aos/dist/aos.css"

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
                Lorem Ipsum is simply dummy text is simply
              </div>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
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
                    AR$ 0.00
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
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
                    AR$ 0.00
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
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
                    AR$ 0.00
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
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

    
    </>
  );
}

export default Precios;
