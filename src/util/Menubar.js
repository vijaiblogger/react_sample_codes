import React from 'react'

export default function Menubar({ editUser ,onDelete,makeEditButtonDisable=true }) {
  
            const onUserDelete = () => {
               onDelete();
                 // const handleDelete = () => {
                //   if (selectedIds.length === 0) {
         				//   alert("Please select at least one row to delete.");
                //     return;
                //   }

                //   // onDeleteSelected(selectedIds);
                // };



            };

            const onUserEdit=()=>{
              editUser();
            }
  return (
     <>
         <div>        
            <div id="menubar"  className="container menubar_background_color">               
              <div className=" justify-content-end d-flex gap-2">
             

                <button disabled={makeEditButtonDisable}  onClick={onUserEdit}  className="btn btn-outline-primary" >
                  <i className="bi bi-pencil-fill me-1"></i> Edit
                </button>

                <button className="btn btn-outline-danger" onClick={onUserDelete} >
                  <i className="bi bi-trash-fill me-1"></i> Delete
                </button>
              </div>
            </div>           
          </div>
    </>
  )
}
