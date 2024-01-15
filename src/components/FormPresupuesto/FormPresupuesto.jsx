import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../DocuPDF";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { useState } from "react";
import Modal from "../Modal/Modal";
import FormItem from "../FormItem/FormItem";
function FormPresupuesto() {


  const { nameComplete, direccion, localidad, condPago, cuit, fecha, condIva, setNameComplete, setDireccion, setLocalidad, setCondPago, setCuit, setFecha, setCondIva, item } = useContext(FormContext)

  const [modalProducts, setModalPorducts] = useState(false)

  function HangleSubmit(e) {
    e.preventDefault()
    // const pdf = <MyDocument />


  }

  function closeModal() {
    setModalPorducts(!modalProducts)
  }

  return (
    <>
      <form onSubmit={HangleSubmit} className="form-presu">
        <div className="form-presu__titles">
          <h2 className="h2">Datos para completar todo el formulario</h2>
          <h5 className="h5">Completar todos los datos</h5>
        </div>
        <div className="form-presu__inputs">
          <div className="form-presu__gruop">
            <label className="label">Nombre y apellido</label>
            <input className="input" value={nameComplete} onChange={(e) => setNameComplete(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Direccion</label>
            <input className="input" value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Localidad</label>
            <input className="input" value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">COND. PAGO</label>
            <input className="input" value={condPago} onChange={(e) => setCondPago(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">CUIT</label>
            <input className="input" value={cuit} onChange={(e) => setCuit(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Fecha</label>
            <input className="input" value={fecha} onChange={(e) => setFecha(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">COND.IVA</label>
            <input className="input" value={condIva} onChange={(e) => setCondIva(e.target.value)} type="text" />
          </div>

        </div>
        <div className="from-presu__buttons">

          <button className="form-presu__btn-item" onClick={() => setModalPorducts(!modalProducts)}>Agregar item</button>
          {modalProducts
            ?
            <Modal mesaggeAviso={modalProducts}>
              <h3>Productos del presupuesto</h3>
              <FormItem closeModal={closeModal} />

            </Modal>
            :
            null
          }

          <PDFDownloadLink className="form-presu__pdf" style={{ marginTop: "1rem" }} document={<MyDocument
            nameComplete={nameComplete}
            direccion={direccion}
            localidad={localidad}
            condPago={condPago}
            cuit={cuit}
            fecha={fecha}
            condIva={condIva}
            item={item}
          />} fileName="presu2.pdf">
            Solicitar PDF
          </PDFDownloadLink>
        </div>
      </form>




    </>
  );
}

export default FormPresupuesto;