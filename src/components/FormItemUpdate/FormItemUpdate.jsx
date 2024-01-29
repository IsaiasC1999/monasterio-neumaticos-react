import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
function FormItemUpdate({ closeModal, ItemUpdate, setItemUpdate }) {

    const { setItem, item } = useContext(FormContext)


    // paso como props el item el cual quiero actualizar

    function hangleChange(event) {
        console.log("hola");
        const { name, value } = event.target;
        setItemUpdate({ ...ItemUpdate, [name]: value })

    }



    function updateItem(idItem) {
        const newItems = item.map(ele => {
            if(ele.id === idItem){
                return {...ele,...ItemUpdate}
            }
            return {...ele}
        })

        setItem(newItems)
    }

    return (
        <>
            <div className="form_presu__inputs">

                <div className="form-presu__gruop">
                    <label className="label">Codigo</label>
                    <select onChange={hangleChange} name="codigo" value={ItemUpdate.codigo} style={{ width: "100%" }}>
                        <option>.</option>
                        <option value=".1">.1</option>
                        <option value=".2">.2</option>
                    </select>
                    {/* <input className="input" value={codigo} onChange={(e) => setCodigo(e.target.value)} type="text" /> */}
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Cantidad</label>
                    <input className="input" value={ItemUpdate.cantidad} name="cantidad" onChange={hangleChange} type="number" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Descripcion</label>
                    <input className="input" value={ItemUpdate.descripcion} name="descripcion" onChange={hangleChange} type="text" />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Precio</label>
                    <input className="input" type='number' value={ItemUpdate.precio} name="precio" onChange={hangleChange} />
                </div>
                <div className="form-presu__gruop">
                    <label className="label">Descuento %</label>
                    <input className="input" value={ItemUpdate.descuento} name="descuento" onChange={hangleChange} type="number" />
                </div>
                <div className="form-presu__buttons">
                    <button className="form-presu__btn-save" onClick={() => { updateItem(ItemUpdate.id) , closeModal() }}>Guardar</button>
                    <button className="form-presu__btn_cancel" onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </>
    );
}

export default FormItemUpdate;