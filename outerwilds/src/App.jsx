import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {   
    
  const bienvenidos="Bienvenidos!"
  return (
    <>
      <Navbar />
      <ItemListContainer bienvenidos={bienvenidos}/>
    </>
  )
}
export default App
