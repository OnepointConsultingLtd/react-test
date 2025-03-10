import './App.css'
import { VectorFormProvider } from './context/VectorFormContext'
import VectorForm from './components/VectorForm'


function App() {

  return (
    <>
      <VectorFormProvider>
        <VectorForm />
      </VectorFormProvider>
    </>
  )
}

export default App 