import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../DocuPDF";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { useState } from "react";
import Modal from "../Modal/Modal";
import FormItem from "../FormItem/FormItem";
import { UnionPDF } from "../DocuUnion";
import TableItems from "../TableItems/TableItems";
import db from "../../firebase/config";
function FormPresupuesto() {

  const [showBtnPdf, setShowBtnPdf] = useState(false)

  const { nameComplete, direccion, localidad, condPago, cuit, fecha, condIva, setNameComplete, setDireccion, setLocalidad, setCondPago, setCuit, setCondIva, item, numPresupuesto, setNumPresupuesto , setItem ,NroCliente ,setNroCliente } = useContext(FormContext)

  const [modalProducts, setModalPorducts] = useState(false)

  function HangleSubmit(e) {
    e.preventDefault()
    // const pdf = <MyDocument />


  }


  async function obtenerNumero() {

    const presupuestoDoc = await db.collection('NroPresupuesto').doc('23MLIkZEnyDPihZsl7yX').get();

    if (presupuestoDoc.exists) {
      const numeroPresupuesto = presupuestoDoc.data().idPresupuesto;
      setNumPresupuesto(numeroPresupuesto + 1)
      let nuevoNum = numeroPresupuesto + 1
      actualizarNumeroPresupuesto(nuevoNum)
    } else {
      console.error('El documento no existe.');
      return null;
    }
  }

  const actualizarNumeroPresupuesto = async (nuevoNumero) => {

    console.log(nuevoNumero);
    await db.collection('NroPresupuesto').doc('23MLIkZEnyDPihZsl7yX').update({
      idPresupuesto: nuevoNumero,
    });
  };

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
            <input className="input" required value={nameComplete} onChange={(e) => setNameComplete(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Direccion</label>
            <input className="input" required value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Vendedor</label>
            <input className="input" required value={localidad} onChange={(e) => setLocalidad(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Forma de pago</label>
            <input className="input" required value={condPago} onChange={(e) => setCondPago(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label" required >CUIT</label>
            <input className="input" value={cuit} onChange={(e) => setCuit(e.target.value)} type="text" />
          </div>
          <div className="form-presu__gruop">
            <label className="label">Cond.IVA</label>
            <select style={{ minWidth: "300px" , marginTop: ".5rem" }} onChange={(e)=> setCondIva(e.target.value)} >
              <option value="Resp. Inscripto">Resp. Inscripto</option>
              <option value="Cons. Final">Cons. Final</option>
              <option value="Exento">Exento</option>
            </select>
            {/* <input className="input" required value={condIva} onChange={(e) => setCondIva(e.target.value)} type="text" /> */}
          </div>
          <div className="form-presu__gruop">
            <label className="label" required >Nº Celular</label>
            <input className="input" value={NroCliente} onChange={(e) => setNroCliente(e.target.value)} type="text" />
          </div>

        </div>
        <div className="from-presu__buttons">

          <button className="form-presu__btn-item" onClick={() => setModalPorducts(!modalProducts)}>Agregar item</button>
          <button className="form-presu__btn-confirm" onClick={() => { obtenerNumero(), setShowBtnPdf(!showBtnPdf) }}>Confirmar PDF</button>
          {modalProducts
            ?
            <Modal mesaggeAviso={modalProducts}>
              <h3>Productos del presupuesto</h3>
              <FormItem closeModal={closeModal} />

            </Modal>
            :
            null
          }
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <button >gg</button> */}
            <button onClick={()=>{setShowBtnPdf(!showBtnPdf),setNumPresupuesto(0)}} style={{ border: "none", backgroundColor: 'inherit' }}>
              <PDFDownloadLink className="form-presu__pdf" style={{ margin: "1rem", display: `${numPresupuesto != 0 ? 'block' : 'none'}` }} document={<MyDocument
                nameComplete={nameComplete}
                direccion={direccion}
                localidad={localidad}
                condPago={condPago}
                cuit={cuit}
                fecha={fecha}
                condIva={condIva}
                item={item}
                idPresu={numPresupuesto}
                NroCliente={NroCliente}
                />} fileName={`${nameComplete}.pdf`}>
                Monasterio N. PDF
              </PDFDownloadLink>
            </button>
            <button onClick={()=>{setShowBtnPdf(!showBtnPdf),setNumPresupuesto(0)}} style={{ border: "none", backgroundColor: 'inherit', }}>
              <PDFDownloadLink className="form-presu__pdf" style={{ margin: "1rem", display: `${ numPresupuesto!=0 ? 'block' : 'none'}` }} document={<UnionPDF
                nameComplete={nameComplete}
                direccion={direccion}
                localidad={localidad}
                condPago={condPago}
                cuit={cuit}
                fecha={fecha}
                condIva={condIva}
                item={item}
                setItem={setItem}
                idPresu={numPresupuesto}
                NroClienteNroCliente={NroCliente}
              />} fileName={`${nameComplete}.pdf`}>
                La Union PDF
              </PDFDownloadLink>
            </button>
          </div>

          {

            item.length == 0 ? null
              : <TableItems items={item} setItem={setItem} />
          }


        </div>
      </form>




    </>
  );
}

export default FormPresupuesto;