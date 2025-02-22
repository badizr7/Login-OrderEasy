import React, {useContext} from "react";
import './top.css'

//Importar Iconos
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";


//Importar Imagenes
import img from '../../../assets/soyadmin.jpg'
import img2 from '../../../assets/switch.png'
import video from '../../../assets/video.mp4'


const Top = () =>{

    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Bienvenido a Order Easy</h1>
                    <p>Hola, Bienvenido de Vuelta</p>
                </div>
                
                <div className="searchBar flex">
                    <input type="text" placeholder="Buscar" />
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoNotificationsOutline className="icon"/>
                    <AiOutlineShoppingCart className="icon cart"/>
                    <span className="cartTotal">0</span>
                    <img className="adminImage" src={img} alt="Admin Image"/>
                </div>
            </div>

            <div className="cardSection flex">
                
                <div className="rightCard flex">
                    <h1>Añade y vende extraordinarios productos tecnologicos</h1>
                    <p>El mas rapido sistema de inventario de productos tecnologicos!</p>

                    <div className="buttons flex">
                        <button className="btn">Sigue Explorando</button>
                        <button className="btn transparent">Top Vendedores</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        
                        <div className="textDiv">
                            <h1>Mi Estado</h1>
                            <div className="flex">
                                <span>
                                    Hoy <br /> <small>4 Pedidos</small>
                                </span>
                                <span>
                                    Este mes <br /> <small>120 Pedidos</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Ir a mis pedidos <BsArrowRightShort className="icon"/>
                            </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="Image Name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top