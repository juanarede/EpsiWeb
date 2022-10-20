import React,{ useRef } from "react";
import axios from "axios";

//URL del servidor PHP
const URL_SERVER = "http://localhost/api/index.php/?email=";
    

/*const enviarData = async( url, data)=>{
    //Determinamos los tipos de datos que enviamos al SERVER
    const resp = await fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
          }
      });
      console.log(resp);
      //Convertimos la respuesta en JSON
      const json = await resp.json();
      console.log(json);
    }*/


export default function Message (props){

  const refEmail = useRef(null);
  const refMensaje = useRef(null);

 const formEvent = (e)=>{
  e.preventDefault();
  
  
  const data = {
    email: refEmail.current.value,
    mensaje: refMensaje.current.value
  }
  const jsonData = JSON.stringify(data);

  const URL_SERVER = "http://localhost/api/index.php/";
  
  fetch(URL_SERVER,{
    method: 'POST',
    body:jsonData,
    headers: {"Content-Type":"application/json"}
  })
    .then(res=>console.log(res));
  

 }

   
    /*const refEmail = useRef(null);
    const refMensaje = useRef(null);
    
    //Envio de Formulario//
    const clicEvento =(e)=>{
      e.preventDefault();
      
       const data = {
             "email" : refEmail.current.value ,
             "mensaje" : refMensaje.current.value
       };
      /*axios({
        method: 'POST',
        url: `${URL_SERVER}`,
        headers: {'Content-Type':'application/json'},
        data: {
            "email" : `${refEmail.current.value}`,
            "mensaje": `${refMensaje.current.value}`
        }
      }).then(res=>console.log(res));*/
     /* console.log(data);
      enviarData(URL_SERVER, data);
    }*/
    ////////////////////////////////
    
    
    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Messages</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='modal-body'>

       <form id="form" >
        <div className='mb-3'>
          <input className='form-control' ref={refEmail} type="email" id='email' name="email"  placeholder='Email' />
          <textarea className='form-control' ref={refMensaje} name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
          <input className='btn' type="submit" value="Send Message" name='btn-enviar' onClick={formEvent}/>
        </div>
       </form>
       
      </div>
    </div>
  </div>
</div>
    )
}
    