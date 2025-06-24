import React from 'react'

export default function Menubar({ onButtonClick ,onDelete }) {
  return (
     <>
    <div>        
                <div id="menubar"  className="container menubar_background_color">               
                <div className=" justify-content-end d-flex gap-2">
                  <button  onClick={onButtonClick}  className="btn btn-outline-primary" >
                    <i className="bi bi-pencil-fill me-1"></i> Edit
                  </button>
                  <button className="btn btn-outline-danger" onClick={onDelete} >
                    <i className="bi bi-trash-fill me-1"></i> Delete
                  </button>
               </div>
              </div> 
             

    </div>
    </>
  )
}
