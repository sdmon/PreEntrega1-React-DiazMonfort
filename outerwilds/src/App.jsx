import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'

function App() {   
    
  const bienvenidos="Bienvenidos!"
  return (
    <>
      <Navbar />
      <div className="ow-banner">
        <Banner/>
      </div>
      <ItemListContainer  bienvenidos={bienvenidos}/>      
    </>
  )
}
export default App
