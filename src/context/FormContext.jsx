import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {

    const [nameComplete, setNameComplete] = useState("");
    const [direccion, setDireccion] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [condPago, setCondPago] = useState("");
    const [cuit, setCuit] = useState("");
    const [fecha, setFecha] = useState("");
    const [condIva, setCondIva] = useState("");
    // tiene que ser un array
    const [item,setItem]= useState([]);
    const [codigo, setCodigo] = useState(""); 
    const [cantidad, setCantidad] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [descuento, setDescuento] = useState("");

    return (
        <FormContext.Provider value={{nameComplete,direccion,localidad,condPago,cuit,fecha,condIva,codigo,cantidad,descripcion,precio,descuento,item,setItem,setNameComplete,setDireccion,setLocalidad,setCondPago,setCuit,setFecha,setCondIva,setCodigo,setCantidad,setDescripcion,setPrecio,setDescuento}}>
            {children}
        </FormContext.Provider>
    )


}