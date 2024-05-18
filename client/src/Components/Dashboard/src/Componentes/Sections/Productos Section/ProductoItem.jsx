import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    return (
        <div className="producto">
            <a href="#">
                <div className="producto_img">
                    <img className="img-product" src={image} alt={title} />
                </div>
            </a>
            <div className="producto_Footer">
                <h1 className="title">{title}</h1>
                <p className="category">{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="button-">
                <button className=" btn addCart" onClick={() => addCarrito(id)}>
                    Añadir al Carrito
                </button>
                <button className="btn">
                    Vista
                </button>
            </div>
        </div>
    )
}