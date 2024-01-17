/* eslint-disable react/prop-types */

// import { useContext } from 'react';
import ImageLogo from '../img/logoMonasterio.png'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
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
    flexDirection: 'row'

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

  table: {
    display: 'table',
    // backgroundColor: 'red',
    width: '100%'
  },

  header: {
    margin: "auto",
    flexDirection: "row",
    borderBottom: "solid",
    borderBottomColor: 'black',
    borderBottomWidth: "1px",
    fontFamily: 'Helvetica-Bold',

  },

  tableColumn: {
    width: "16.7%",
    marginBottom: "5px"
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderTopWidth: 0
  },

  cellHeader: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  },

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
  }



});

// Create Document Component
export const MyDocument = ({ nameComplete, direccion, localidad, condPago, cuit, fecha, condIva, item }) => {

  // const { nameComplete, direccion, localidad, condPago, cuit, fecha, condIva, codigo, cantidad, descripcion, precio, descuento } = useContext(FormContext)


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
              <Text style={{ fontSize: 10 }}>Nº : 000045</Text>
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>FECHA 15/11/2023</Text>
              <Text style={{ fontSize: 10 }}>CUIT: 30-71735672-8</Text>
              <Text style={{ fontSize: 10 }}>II.BB.: 30717356728</Text>
              <Text style={{ fontSize: 10 }}>Inicio de Actividades: 01/11/2021</Text>

            </View>
          </View>
          <View style={styles.dataCliente}>
            <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>NOMBRE : </Text>{nameComplete}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>DIRECCIÓN : </Text>{direccion}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>COND.IVA : </Text>{condIva}</Text>
            </View>
            <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>COND. PAGO : </Text>{condPago}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>LOCALIDAD : </Text>{localidad}</Text>
              <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>CUIT Nº: </Text>{cuit}</Text>
            </View>
          </View>

          {/* <View style={styles.headerItem}>
            <Text style={styles.itemH}>CANT.</Text>
            <Text style={styles.itemH}>CÓDIGO </Text>
            <Text style={styles.itemH}>DESCRIPCION</Text>
            <Text style={styles.itemH}>PREC. UNI</Text>
            <Text style={styles.itemH}>DTO. %</Text>
            <Text style={styles.itemH}>IMPORTE</Text>
          </View> */}
          <View style={styles.content}>
            <View style={styles.table}>
              <View style={styles.header}>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    cantidad
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    codigo
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    codigo
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    codigo
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    codigo
                  </Text>
                </View>
                <View style={styles.tableColumn}>
                  <Text style={styles.cellHeader}>
                    codigo
                  </Text>
                </View>
              </View>
              <View style={styles.body}>
                {item.map(ele => {
                  return (
                    <View style={{display:"table-row'" , backgroundColor: 'red' , flexDirection: "row"}} key={ele.descripcion} >
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          dasdasdas
                        </Text>
                      </View>
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          adsdasdasd
                        </Text>
                      </View>
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          {ele.descripcion}
                        </Text>
                      </View>
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          {ele.precio}
                        </Text>
                      </View>
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          {ele.descuento}
                        </Text>
                      </View>
                      <View style={styles.tableColumn}>
                        <Text style={styles.cellHeader}>
                          {ele.descuento}
                        </Text>
                      </View>
                    </View>

                  )
                })}

              </View>
            </View>

            <View style={styles.totalSubtotal}>
              <Text style={styles.itemTotal}>SUBTOTAL             {"$25.000,00"}</Text>
              <Text style={styles.itemTotal}>DTO                                 {"$0,00"}</Text>
              <Text style={styles.itemFinalTotal}>TOTAL                    {"$25.000,00"}</Text>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )

};
