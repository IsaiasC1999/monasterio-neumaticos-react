import { PDFDownloadLink, Document,Page,View,Text,StyleSheet } from "@react-pdf/renderer";
import { MyDocument } from "../DocuPDF";

function FormPresupuesto() {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4',
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
      });

    function HangleSubmit(e) {
        e.preventDefault()
        // const pdf = <MyDocument />


        const pdfDocument = (
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Nombre del Cliente: {"ANANA"}</Text>
                  <Text>Descripción del Servicio: {"PERAS"}</Text>
                  {/* Agrega más campos según tu formulario */}
                </View>
              </Page>
            </Document>
          );

        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
      <html>
        <head>
          <title>Presupuesto</title>
        </head>
        <body>
          <PDFViewer>
            ${pdfDocument}}
          </PDFViewer>
        </body>
      </html>
    `);
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
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Direccion</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Localidad</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">COND. PAGO</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">CUIT</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Fecha</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">COND.IVA</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Codigo</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Cantidad</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Descripcion</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Precio</label>
                        <input className="input" type="text" />
                    </div>
                    <div className="form-presu__gruop">
                        <label className="label">Descuento %</label>
                        <input className="input" type="text" />
                    </div>

                </div>
                 
                {/* <button className="form-presu__btn">
            Solicitar PDF
            <PDFDownloadLink document={<MyDocument/>} fileName="presu.pdf"></PDFDownloadLink>
            </button> */}
                <PDFDownloadLink document={<MyDocument />} fileName="presu2.pdf"><button>
                    Descargar
                </button></PDFDownloadLink>
            </form>

            Solicitar PDF
            <PDFDownloadLink
                style={{ backgroundColor: "blue", color: "white" }}
                document={<MyDocument />}
                fileName="presu.pdf">asdasdas</PDFDownloadLink>

        </>
    );
}

export default FormPresupuesto;