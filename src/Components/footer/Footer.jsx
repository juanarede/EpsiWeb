import React ,{useState, Component, useRef}from 'react'
import Politdepriv from '../politdepriv/Politdepriv';
import Tyc from '../tyc/Tyc';
import ContactImg from "../../assets/img/contactimg.png"
import axios, { Axios } from 'axios';
import Reaptcha from 'reaptcha';




const REACT_APP_SITE_KEY = "6LdvBRIjAAAAAKbYKYh1CK2oQJwQWpMCzCkfS2bI";
class Footer extends React.Component {
 

 state = {
    name:'',
    email:'',
    tel:'',
    message:'Quiero recibir una cotización para mi próximo sitio web...',
    verified: false,
    list:[]
    
 }

onVerify = recaptchaResponse =>{
   this.setState({
     verified: true
   });
} 

handleChange = input =>e=>{
    this.setState({
      [input]:e.target.value
    });
 }
 submitForm = (e) =>{
  //console.log(this.state);
 let action = document.getElementById("action");
 let formu = document.getElementById("demo-form")
   e.preventDefault();
   
 
  var request=axios({
     method: "post",
     url:'https://epsiweb.com/api/contact/index.php',
     headers: {"Content-type":"Application/json"},
     data:{
       name: this.state.name,
       email: this.state.email,
       tel: this.state.tel,
       message: this.state.message,
       
     }
   }).then(result=>{
     if(result){
       
       action.innerHTML= `<div class='alert alert-success' role='alert'>Muchas gracias ${this.state.name} ! Estaremos respondiendo a la brevedad</div>`;
       this.setState({
         name:'',
         email:'',
         tel:'',
         
       })
     }else{
       action.innerHTML= "<div class='alert alert-warning' role='alert'>Error al enviar</div>";
     }
   })
 
   console.log(request);
 }

 //Contenido de la Base de datos
 componentDidMount(){
  axios({url:"http://localhost/EpsiWeb/api/contact/footer.php"})
  .then((response)=>{
    this.setState({
      list:response.data.footer[0]
    })
    console.log(response.data.footer[0]);
  })
    .catch((error)=>{
      console.log(error);
    })
  
 }

render(){
  
  
  const {

    name,
    email,
    tel,
    message,
    list
    

  }= this.state;

  return (
    <>
      <section className="bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            {list.titulo}
          </h2>
        </div>
      </section>

      <footer className="bg-black text-center py-5" id="contact">

      <div className='container' >
      <div className='row' >
      <div className="col-xs-12 col-md-5 col-lg-5">
      <h4 style={{color:"#fff", fontSize:"2rem"}} class="text-start mb-4 card-title display-4 lh-1 mb-4 ">Como te ayudamos:</h4>

    <form id="demo-form" class=" bg-black" onSubmit={this.submitForm}>
   <input type="text" name="nombre" placeholder="Nombre" class="form-control mb-3" required onChange={this.handleChange('name')} value={name}/>
   <input type="email" name="email" placeholder="Email: usuario@ejemplo.com" class="form-control mb-3" required onChange={this.handleChange('email')} value={email}/>
   <input type="text" name="telefono" placeholder="Teléfono" class="form-control mb-3" required onChange={this.handleChange('tel')} value={tel}/>
   <label for="msg" class="form-label text-start lead fw-normal  mb-3 mb-lg-0" style={{color:"#fff"}}>Mensaje</label>
   <textarea style={{height:"13rem"}} id="msg" name="mensaje" cols="30" rows="10" class="form-control lead fw-normal text-muted mb-5 mb-lg-0" required onChange={this.handleChange('message')} value={message}></textarea>
   <div class="d-grid gap-2">
    
    <Reaptcha
    sitekey= {REACT_APP_SITE_KEY}
    onVerify={this.onVerify}
      
    />
   <button type="submit" value="Send" name="btn-enviar" class="btn my-button mt-2 " data-sitekey="6Lds0dMiAAAAAAxEhIKaGDsbqMvEkO_Gbvyjz5nK" data-callback='onSubmit' data-action='submit' title='Mensajeria' disabled={!this.state.verified}>Enviar </button>
   
    </div>
   
    
    <div id="action"></div>

 </form>
      </div>
      <div class="col-1">
  
  </div>
      <div style={{marginTop:"3.3rem"}}  className='col-xs-12 col-md-5 col-lg-6 '>
      <img class="img-fluid d-none d-md-block" style={{width:"35.8rem",marginLeft:"2rem"}} src={ContactImg} title="EpsiWeb-Footer" alt="Movil-Screen" />
    <hr style={{color:"#fff"}} className="m-b4" />
      
      <p style={{color:"#fff"}} class="text-start">{list.parrafo1}</p>
      <hr style={{color:"#fff"}} className="m-b4" />

      
    
        <div className="text-center text-white font-alt ">
            {list.parrafo2}
          </div>
          <a href="https://www.facebook.com/profile.php?id=100086997386336" target="new" title='Facebook-Link'>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-facebook"
          ></i></a>
          <a href="https://www.instagram.com/epsiwebdevs/?hl=es-la" target="new" title='Instagram-Link'>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-instagram"
          ></i></a>
          <a href="https://www.linkedin.com/company/epsiwebdev/about/" target="new" title='Linkedin-Link'>
          <i
            style={{ width: "2rem", color: "#fff", paddingTop: "0.3rem" }}
            class="fa-brands fa-linkedin"
          ></i></a>
      
      </div>
      


      </div>
      <hr style={{marginTop:"4rem", color:"#fff"}} className="m-b4 " />
      </div>
   
      
        <div style={{marginTop:"2rem"}} className="container px-5  ">
         <div className='container'>
          <div className="row">
          <p style={{color:"#fff"}}  className='text-center'><i class="fa-solid fa-phone"></i>+541132117480 / +5491165623938</p>
                 <p className='text-center' style={{color:"#fff"}}><i style={{marginRight:"0.4rem"}} class="fa-regular fa-envelope"></i>info@epsiweb.com</p>
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="text-white-50 small  pt-4 ">
                <div  className=''>
              
                  &copy; EpsiWeb 2022. All Rights Reserved.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4"></div>
            <div className="col-12 col-sm-12 col-lg-4">
            <div   className="text-white-50 small  pt-4 ">
            <a  className="text-white-50" style={{textDecoration:"none", color:"#fff"}} href="#"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" title='Terms-Cond'>Términos y Condiciones</a>
            <a  className="text-white-50" style={{textDecoration:"none", color:"#fff", paddingLeft:"1rem"}} href="#"  data-bs-toggle="modal" data-bs-target="#staticBackdropp" title='Priv-Pol'>Política de Privacidad</a>
            </div>
            
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
}

export default Footer