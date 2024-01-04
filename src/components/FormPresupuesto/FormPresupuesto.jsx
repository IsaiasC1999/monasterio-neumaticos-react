import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../DocuPDF";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function FormPresupuesto() {


    const {nameComplete,direccion,localidad,condPago,cuit,fecha,condIva,codigo,cantidad,descripcion,precio,descuento,setNameComplete,setDireccion,setLocalidad,setCondPago,setCuit,setFecha,setCondIva,setCodigo,setCantidad,setDescripcion,setPrecio,setDescuento} = useContext(FormContext)

  function HangleSubmit(e) {
    e.preventDefault()
    // const pdf = <MyDocument />


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
            <input className="input" value={nameComplete} onChange={(e)=>setNameComplete(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Direccion</label>
            <input className="input" value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Localidad</label>
            <input className="input" value={localidad} onChange={(e)=>setLocalidad(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">COND. PAGO</label>
            <input className="input" value={condPago} onChange={(e)=>setCondPago(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">CUIT</label>
            <input className="input" value={cuit} onChange={(e)=>setCuit(e.target.value)}  type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Fecha</label>
            <input className="input" value={fecha} onChange={(e)=>setFecha(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">COND.IVA</label>
            <input className="input" value={condIva} onChange={(e)=>setCondIva(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Codigo</label>
            <input className="input" value={codigo} onChange={(e)=>setCodigo(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Cantidad</label>
            <input className="input" value={cantidad} onChange={(e)=>setCantidad(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Descripcion</label>
            <input className="input" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Precio</label>
            <input className="input" value={precio} onChange={(e)=>setPrecio(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Descuento %</label>
            <input className="input" value={descuento} onChange={(e)=>setDescuento(e.target.value)} type="text" />
          </div>

        </div>
        {/* <button className="form-presu__btn">
            Solicitar PDF
            <PDFDownloadLink document={<MyDocument/>} fileName="presu.pdf"></PDFDownloadLink>
            </button> */}
        <PDFDownloadLink document={<MyDocument  />} fileName="presu2.pdf">
              Descargar
        </PDFDownloadLink>
      </form>

      
     

    </>
  );
}

export default FormPresupuesto;