import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";


function FormItem({ closeModal }) {

    const { codigo, cantidad, descripcion, precio, descuento, setCodigo, setCantidad, setDescripcion, setPrecio, setDescuento,setItem,item} = useContext(FormContext)


    function SaveItem() {
        // e.preventDefault();
        setItem([...item,{
            codigo: codigo,
            cantidad : cantidad,
            descripcion : descripcion,
            precio : precio,
            descuento : descuento
        }])    
    }

    return (

            <div className="form_presu__inputs">

                <div className="form-presu__gruop">
                    <label className="label">Codigo</label>
                    <input className="input" value={codigo} onChange={(e) => setCodigo(e.target.value)} type="text" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Cantidad</label>
                    <input className="input" value={cantidad} onChange={(e) => setCantidad(e.target.value)} type="text" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Descripcion</label>
                    <input className="input" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} type="text" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Precio</label>
                    <input className="input" value={precio} onChange={(e) => setPrecio(e.target.value)} type="text" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Descuento %</label>
                    <input className="input" value={descuento} onChange={(e) => setDescuento(e.target.value)} type="text" />
                </div>
                <button onClick={()=>{SaveItem() , closeModal()}}>Guardar</button>
                <button onClick={closeModal}>Cancelar</button>
            </div>
        
    )
}


export default FormItem;