import './ItemListContainer.css'

const ItemListContainer = ({bienvenidos}) => {
    return ( 
        <>
            <div className="div-item">
                <h1 style={{color: 'orange', justifyContent:'center'}}>{bienvenidos}</h1>
            </div>    
        </> );
}
 
export default ItemListContainer;