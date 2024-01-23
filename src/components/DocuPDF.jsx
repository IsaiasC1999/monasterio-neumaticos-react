/* eslint-disable react/prop-types */

// import { useContext } from 'react';
import ImageLogo from '../img/logoMonasterio.png'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import db from '../firebase/config';
// import { FormContext } from '../context/FormContext';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10



  },
  mySection: {
    margin: 10,
    flexGrow: 1,
    border: '1px solid #000', // Añadir un borde alrededor del recuadro
    // backgroundColor: 'red',
    // maxHeight: "100vh"
  },


  // header presupuesto
  headerPresupuesto: {
    height: '20%',
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative'

  },

  // parte izquierda
  logoPresu: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '100%',
    width: '50vh',
    marginBottom: "4px"

  },
  datosEmpresa: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '50vh',
    textAlign: 'left',
    gap: 5
  },



  // DATOS CLIENTES
  dataCliente: {
    height: '10%',
    borderBottom: '1px solid #000',
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },



  content: {
    height: "100%",
    display: 'flex',
    justifyContent: 'space-between',
  },

  // item main


  body: {
    margin: "auto",
    flexDirection: "row"
  },



  // Total y subtotal
  totalSubtotal: {
    height: '15%',
    borderTop: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10',
    gap: 15
  },

  itemTotal: {
    fontSize: 10
  },

  itemFinalTotal: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold'
  },


  // prueba nueva tabla

  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
    fontFamily: 'Helvetica-Bold'
  },
  tableCell: {
    width: '28%',
    padding: 8,
    textAlign: 'left',
    fontSize: "8px"
  },
  tableRowBody: {
    flexDirection: 'row',
    // backgroundColor: 'red'

  },
  tableCellBody: {
    width: '28%',
    padding: 5,
    textAlign: 'left',
    fontSize: "9px"
  }

});

// Create Document Component
export const MyDocument = ({ nameComplete, direccion, localidad, condPago, cuit, condIva, item,idPresu,NroCliente }) => {

  // const { nameComplete, direccion, localidad, condPago, cuit, fecha, condIva, codigo, cantidad, descripcion, precio, descuento } = useContext(FormContext)

  function obtenerFechaConFormato() {
    // Obtener la fecha actual
    var fecha = new Date();

    // Obtener día, mes y año
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
    var año = fecha.getFullYear();

    // Formatear los componentes de la fecha con ceros a la izquierda si es necesario
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    // Construir la cadena de fecha en el formato "dd/mm/año"
    var fechaFormateada = dia + '/' + mes + '/' + año;

    return fechaFormateada;
  }

  function ItemImporte(item) {


    // console.log(item.cantidad);
    // console.log(item.precio);
    let itemImportePrecio = (item.cantidad * item.precio);

    let descuento = itemImportePrecio * item.descuento;



    return (itemImportePrecio - descuento);
  }

  function Total(item) {
    let total = 0;
    item.forEach(ele => {
      total = total + ItemImporte(ele)

    });
    // console.log(total);
    return total;
  }

  function FormatPrecio(precio){
    
    let result = precio.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    });

    return result;
  }

  function FormatPrecioItem(precio) {
    // Redondear el precio a dos decimales
    precio = Math.round(precio * 100) / 100;

    // Convertir el precio a una cadena con dos decimales
    let precioStr = precio.toFixed(2);

    // Obtener la parte entera y la parte decimal
    let [parteEntera, parteDecimal] = precioStr.split('.');

    // Formatear la parte entera con separadores de miles
    parteEntera = parseInt(parteEntera).toLocaleString();

    // Combinar la parte entera y la parte decimal en el formato final
    let result = `$ ${parteEntera},${parteDecimal}`;

    return result;
  }
 


  return (

    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mySection}>
          <View style={styles.headerPresupuesto}>
            <View style={styles.logoPresu}>
              <Image src={ImageLogo} style={{ width: 160, margin: 15 }} />
              <Text style={{ fontSize: 10 }}>Ruta Provincial 305 Km 19 0 - Timbo Viejo - Tucumán</Text>
              <Text style={{ fontSize: 10, marginTop: 3 }}>Tel.: 3815828883     monasterioneumaticos@gmail.com</Text>
              <View style={{ border: '1px solid #000', marginTop: 10, marginBottom: 2 }}>
                <Text style={{ fontSize: 10, paddingBottom: 3 }}> IVA RESPONSABLE INSCRIPTO</Text>
              </View>
            </View>
            <View style={styles.datosEmpresa}>
              <Text style={{ fontSize: 20 }}>PRESUPUESTO</Text>
              <Text style={{ fontSize: 10 }}>Nº : {idPresu}</Text>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>FECHA  {obtenerFechaConFormato()}</Text>
              <Text style={{ fontSize: 10 }}>CUIT: 30-71735672-8</Text>
              <Text style={{ fontSize: 10 }}>II.BB.: 30717356728</Text>
              <Text style={{ fontSize: 10 }}>Inicio de Actividades: 01/11/2021</Text>

            </View>
            <View style={{ position: 'absolute', top: 5, right: 265, border: "1px solid black", width: 25, height: 25 }}>
              <Text style={{ textAlign: "center", marginTop: 2 }}>X</Text>
            </View>
          </View>
          <View style={styles.dataCliente}>
            <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>NOMBRE : </Text>{nameComplete}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>DIRECCIÓN : </Text>{direccion}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>COND.IVA : </Text>{condIva}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Nº CELULAR: </Text>{NroCliente}</Text>
            </View>
            <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>FORMA DE PAGO : </Text>{condPago}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>VENDEDOR : </Text>{localidad}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>CUIT Nº: </Text>{cuit}</Text>
            </View>
          </View>


          <View style={styles.content}>

            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>CODIGO</Text>
                <Text style={styles.tableCell}>CANT.</Text>
                <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: "8px", marginTop: "3px" }}>DESCRIPCION</Text>
                <Text style={styles.tableCell}>PREC.UNI.</Text>
                <Text style={styles.tableCell}>DTO%</Text>
                <Text style={styles.tableCell}>IMPORTE</Text>
              </View>
              {item.map(ele => {
                return (
                  <View key={"sdasdas"} style={styles.tableRowBody}>
                    <Text style={styles.tableCellBody}>{ele.codigo}</Text>
                    <Text style={styles.tableCellBody}>{ele.cantidad}</Text>
                    <Text style={{ width: '270px', padding: 5, textAlign: 'left', fontSize: "9px" }}>{ele.descripcion}</Text>
                    <Text style={styles.tableCellBody}>{FormatPrecioItem(ele.precio)}</Text>
                    <Text style={styles.tableCellBody}>{ele.descuento}</Text>
                    <Text style={styles.tableCellBody}>{FormatPrecio(ItemImporte(ele))}</Text>
                  </View>
                )
              })}
            </View>

            <View style={styles.totalSubtotal}>
              <Text style={styles.itemTotal}>SUBTOTAL             {FormatPrecio(Total(item))}</Text>
              {/* <Text style={styles.itemTotal}>DTO                                 {"$0,00"}</Text> */}
              <Text style={styles.itemFinalTotal}>TOTAL                    {FormatPrecio(Total(item))}</Text>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )

};

