import React, {useContext} from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import './Productos.css'


//Importar Iconos
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";




const Productos = () => {


    

    const value = useContext(DataContext)
    const [productos] = value.productos
    const [menu, setMenu] = value.menu
    const[carrito] = value.carrito
    

    const toogleMenu = () =>{
        setMenu(!menu)
    }

    console.log(productos);


    
    return (
        <div className="mainContent">
            <div className="topSection">
                <div className="headerSection flex">
                    <div className="title">
                        <h1>Productos</h1>
                    </div>

                    <div className="searchBar flex">
                        <input type="text" placeholder="Buscar" />
                        <BiSearchAlt className="icon" />
                    </div>

                    <div className="adminDiv">
                    <AiOutlineShoppingCart className="icon cart" onClick={toogleMenu}/>
                    <span className="cartTotal">{carrito.length}</span>
                    </div>
                </div>
            </div>
            <div className="productos">
                {
                    productos.map(producto =>(
                        <ProductoItem key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        />  
                    ))
                }              
            </div>
        </div>
    );
}

export default Productos;