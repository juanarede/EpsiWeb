import React from 'react'

function Footer() {
  return (
    <>
           <section className="bg-gradient-primary-to-secondary">
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Esperamos poder trabajar juntos!</h2>
                
            </div>
        </section>
       
        <footer className="bg-black text-center py-5">
            <div className="container px-5">
            <div className="text-center text-white font-alt ">
                 Seguinos en Nuestras Redes!!
                 
            </div>
            <i style={{width:"2rem", color:"#fff",paddingTop:"0.3rem"}} class="fa-brands fa-facebook"></i>
            <i style={{width:"2rem", color:"#fff",paddingTop:"0.3rem"}} class="fa-brands fa-instagram"></i>
            <i style={{width:"2rem", color:"#fff",paddingTop:"0.3rem"}} class="fa-brands fa-linkedin"></i>
                <div className="text-white-50 small d-flex justify-content-start pt-4 col-xs-12">
                    <div className="mb-2">&copy; EpsiWeb 2022. All Rights Reserved.</div>
                   
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer