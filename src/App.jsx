
import { PDFViewer } from '@react-pdf/renderer'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { FormProvider } from './context/FormContext'
import { MyDocument } from './components/DocuPDF'


function App() {




  return (
    <FormProvider>
      <div className='page-presupuesto'>
        <Header />
        <Main />
        {/* <PDFViewer style={{width:"400px"}}> 
          <MyDocument/>
        </PDFViewer> */}
      </div>
    </FormProvider>
  )
}

export default App
