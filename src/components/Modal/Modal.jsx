import { useState } from "react";
// import './'
function Modal({ children, mesaggeAviso }) {



    return (
        <div className={`modal-form-item ${mesaggeAviso ? 'show' : ''}`} >
            <div className='modal-container'>
                {children}
            </div>
        </div>
    )

}




export default Modal;