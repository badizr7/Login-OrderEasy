import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Componentes/SideBar Section/Sidebar';
import Body from './Componentes/Body Section/Body';
import Carrito from './Componentes/Sections/Carrito Section/Carrito'
import Explorar from './Componentes/Sections/Explorar Section/Explorar'
import Productos from './Componentes/Sections/Productos Section/Productos'
import TopClientes from './Componentes/Sections/Explorar Section/Top Clientes/TopClientes';
import { DataProvider } from './context/DataProvider';

function App() {


  return (
    <DataProvider>
      <div className="container">
        <BrowserRouter>
          <Sidebar/>
          <Carrito/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="Productos" element={<Productos />} />
            <Route path="Explorar" element={<Explorar />} />
            <Route path="TopClientes" element={<TopClientes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
