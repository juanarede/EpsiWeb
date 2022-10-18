import React,{ useRef } from "react";


export default function Message (props){
    //URL del servidor PHP
    const URL_SERVER = "http://localhost/epsiweb/app/src/controller/MessageController.php";
    
    const refEmail = useRef(null);
    const refMensaje = useRef(null);
    
    //Envio de Formulario//
    const clicEvento= async ()=>{
      
      
       const data = {
             "email" : refEmail.current.value,
             "mensaje" : refMensaje.current.value
       }
     
      console.log(data);
      enviarData(URL_SERVER, data);
    }
    ////////////////////////////////
    
    const enviarData = async( url, data)=>{
    
    const resp = await fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            //Determinamos los tipos de datos que enviamos al SERVER
            'Content-Type': 'application/json'
          }
      });
      console.log(resp);
      //Convertimos la respuesta en JSON
      const json = await resp.json();
      console.log(json);
    }
    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Messages</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='modal-body'>
       <form>
        <div className='mb-3'>
          <input className='form-control' type="email" id='email' name="email"  placeholder='Email' ref={refEmail} />
          <textarea className='form-control' name="mensaje" id="mensaje" cols="30" rows="10" ref={refMensaje}></textarea>
          <input className='btn' type="submit" value="Send Message" name='btn-enviar' onClick={clicEvento}/>
        </div>
       </form>
       
      </div>
    </div>
  </div>
</div>
    )
}
    ////////////////////////////////////////////