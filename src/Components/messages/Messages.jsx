import React,{ useRef } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class Messages extends React.Component{
      constructor(props){
         super(props);
         this.state={
          mensaje : {
            "email" : "",
            "mensaje":"",
          },
         };
         this.manejarCambio = this.manejarCambio.bind(this);
         this.envioMensaje = this.envioMensaje.bind(this);
         
      }


render(){   
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Messages</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className='modal-body'>

       <form id="form" onSubmit={this.envioMensaje}>
        <div className='mb-3'>
          <input className='form-control'  type="email" id='email' name="email"  placeholder='Email' value={this.state.mensaje.email} onChange={this.manejarCambio}/>
          <textarea className='form-control' value={this.state.mensaje.mensaje} name="mensaje" id="mensaje" cols="30" rows="10" onChange={this.manejarCambio}></textarea>
          <button className="btn">Enviar</button>
        </div>
       </form>
       
      </div>
    </div>
  </div>
</div>
    );
    
} 

async envioMensaje(e){
  e.preventDefault();
  
  const cuerpo = JSON.stringify(this.state.mensaje);

  const respuesta = await fetch("http://localhost/api/index.php",{
    method: "POST",
    body: cuerpo,
  });

  console.log(respuesta);

}

manejarCambio(e){
  const clave = e.target.id;
  let valor = e.target.value;
  this.setState(state=>{
    const mensajeActualizado = state.mensaje;

    if(clave !== "email"){
      valor = parseFloat(valor);
    }
    mensajeActualizado[clave]= valor;
    return{
      mensaje: mensajeActualizado,
    }
  })
}


}
export default Messages;
    