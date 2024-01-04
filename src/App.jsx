
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { FormProvider } from './context/FormContext'


function App() {




  return (
    <FormProvider>
      <div className='page-presupuesto'>
        <Header />
        <Main />
      </div>
    </FormProvider>
  )
}

export default App
