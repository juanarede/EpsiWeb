import React from 'react'
import Tyc from '../tyc/Tyc';

function Footer() {
  return (
    <>
      <section className="bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            Esperamos poder trabajar juntos!
          </h2>
        </div>
      </section>

      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-center text-white font-alt ">
            Seguinos en Nuestras Redes!!
          </div>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-facebook"
          ></i>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-instagram"
          ></i>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-linkedin"
          ></i>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="text-white-50 small  pt-4 ">
                <div className="mb-2 ">
                  &copy; EpsiWeb 2022. All Rights Reserved.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4"></div>
            <div className="col-12 col-sm-12 col-lg-4">
            <div   className="text-white-50 small  pt-4 ">
            <a  className="text-white-50" style={{textDecoration:"none", color:"#fff"}} href="#"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Términos y Condiciones</a>
            </div>
            
            </div>
           
          </div>
        </div>
      </footer>
      <Tyc/>
    </>
  );
}

export default Footer