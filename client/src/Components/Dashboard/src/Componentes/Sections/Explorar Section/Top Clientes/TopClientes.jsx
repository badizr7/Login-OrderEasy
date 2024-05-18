import React from "react";
import './TopClientes.css';
import { Link } from "react-router-dom";

//Importar Imagenes
import user1 from '../../../../assets/user6.jpg'
import user2 from '../../../../assets/user7.jpg'
import user3 from '../../../../assets/user8.jpg'
import user4 from '../../../../assets/cj.jpg'


const TopClientes = () => {
    return (
        <div className="mainContent">
            <div className="table">
                <div className="tableHeader">
                    <h1 className="title">Clientes Favoritos</h1>
                    <div>
                    <Link to="/Explorar">
                        <button className="btn">Regresar 
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Pais</th>
                                <th># de Compras</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="row">10</th>
                                <td> <img src={user1} alt="" /></td>
                                <td>Maria</td>
                                <td>Moran</td>
                                <td>Chile</td>
                                <td>150 Compras</td>
                            </tr>

                            <tr>
                                <th className="row">15</th>
                                <td> <img src={user2} alt="" /></td>
                                <td>Mariana</td>
                                <td>Vasquez</td>
                                <td>Colombia</td>
                                <td>90 Compras</td>
                            </tr>

                            <tr>
                                <th className="row">30</th>
                                <td> <img src={user4} alt="" /></td>
                                <td>Juan</td>
                                <td>Badillo</td>
                                <td>Perú</td>
                                <td>70 Compras</td>
                            </tr>

                            <tr>
                                <th className="row">55</th>
                                <td> <img src={user3} alt="" /></td>
                                <td>Rafael</td>
                                <td>Mejía</td>
                                <td>Ecuador</td>
                                <td>20 Compras</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TopClientes;