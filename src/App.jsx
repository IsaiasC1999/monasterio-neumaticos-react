
// import { PDFViewer } from '@react-pdf/renderer'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { FormProvider } from './context/FormContext'
// import { MyDocument } from './components/DocuPDF'
// import { UnionPDF } from './components/DocuUnion'
import './firebase/config'
import db from './firebase/config'
// import { addDoc, collection} from 'firebase/firestore/lite'


function App() {


  return (
    <FormProvider>
      <div className='page-presupuesto'>
        <Header />
        <Main />
        {/* <PDFViewer style={{width:"600px"}}> 
          <UnionPDF/>
        </PDFViewer> */}
      </div>


      {/* <button onClick={addFireBase}>agregar persona Fire Base</button> */}
    </FormProvider>
  )
}

export default App
