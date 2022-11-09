import React from 'react'
import Politdepriv from '../politdepriv/Politdepriv';
import Tyc from '../tyc/Tyc';
import ContactImg from "../../assets/img/dev.jpg"

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

      <div className='container' id="contact">
      <div className='row'>
      <div className="col-xs-12 col-md-5 col-lg-5">
      <h1 style={{color:"#fff", fontSize:"2rem"}} class="text-start mb-4 card-title display-4 lh-1 mb-4 ">lorem ipsum</h1>
      <form id="demo-form" action="" method="POST" class=" bg-black">
   <input type="text" name="nombre" placeholder="Nombre" class="form-control mb-3"/>
   <input type="email" name="email" placeholder="Email: usuario@ejemplo.com" class="form-control mb-3"/>
   <label for="msg" class="form-label text-start lead fw-normal  mb-3 mb-lg-0" style={{color:"#fff"}}>Mensaje</label>
   <textarea id="msg" name="mensaje" id="#" cols="30" rows="10" class="form-control lead fw-normal text-muted mb-5 mb-lg-0">Quiero recibir una cotización para mi proximo sitio web...</textarea>
   <div class="d-grid gap-2">
   
   <button type="submit" value="Send" name="btn-enviar" class="btn my-button mt-2 " data-sitekey="6Lds0dMiAAAAAAxEhIKaGDsbqMvEkO_Gbvyjz5nK" data-callback='onSubmit' data-action='submit'>Enviar </button>
   
    </div>
 </form>
      </div>
      <div class="col-1">
  
  </div>
      <div style={{marginTop:"3.3rem"}}  className='col-xs-12 col-md-5 col-lg-6 '>
      <img class="img-fluid d-none d-md-block" style={{width:"35.8rem",marginLeft:"2rem"}} src={ContactImg} alt="" />
    <hr style={{colo:"#fff"}} className="m-b4" />
      
      <p style={{color:"#fff"}} class="text-start">Otórganos algunos detalles acerca de tu emprendimiento web. Tu próximo sitio web debe llegar al publico realmente interesado con lo que ofreces. Con la información que nos puedas brindar podremos crear el contenido ideal para ese proyecto que tienes en mente.</p>
      <hr style={{colo:"#fff"}} className="m-b4" />
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
      </div>


      </div>
      <hr style={{marginTop:"4rem", color:"#fff"}} className="m-b4 " />
      </div>
   
      
        <div style={{marginTop:"2rem"}} className="container px-5  ">
         
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
            <a  className="text-white-50" style={{textDecoration:"none", color:"#fff", paddingLeft:"1rem"}} href="#"  data-bs-toggle="modal" data-bs-target="#staticBackdropp">Política de Privacidad</a>
            </div>
            
            </div>
           
          </div>
        </div>
      </footer>
      <Tyc/>
      <Politdepriv/>
    </>
  );
}

export default Footer