import { AppBar } from '@mui/material';

import logoWithe from '../../assets/img/logowithe.png'
import './navbar.css'
import { useState, React } from 'react';


function clicEvento (e){
  e.preventDefault();
  let email = e.target[0].value;
  let mensaje = e.target[1].value;

  console.log(email);
  console.log(mensaje);
}


function Navbar() {

    const [navbarScroll, setNavbarScroll] = useState(false);


const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <AppBar sx={
        navbarScroll
          ? {
              backgroundColor: "#000",
              transition: "0.3s",
              width: "100%",
            }
          : {
              backgroundColor: "#000"
                ? "transparent"
                :'#000' ,
              boxShadow: 0,
              transition: "0.3s",
              width: "100%",
            }
      } className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
   
    <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top"><img className='logonav' src={logoWithe} alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul  className=" navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li  className="nav-item"><a class="nav-link me-lg-3" href="#features">Our Service</a></li>
                <li  className="nav-item"><a class="nav-link me-lg-3" href="#download">About Us</a></li>
                <li  className="nav-item"><a class="nav-link me-lg-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Let's talk</a></li>
            </ul>
            
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Messages</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='modal-body'>
       <form onSubmit={clicEvento}>
        <div className='mb-3'>
          <input className='form-control' type="email" id='email' name="email"  placeholder='Email' />
          <textarea className='form-control' name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
          <input className='btn' type="submit" value="Send Message" name='btn-enviar'/>
        </div>
       </form>
       
      </div>
    </div>
  </div>
</div>

        </div>
    </div>

</AppBar>

  )
  
}

export default Navbar 


          