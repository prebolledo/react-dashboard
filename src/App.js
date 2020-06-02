import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import VentasMensuales from './components/ventas-mensuales';
import Filtros from './components/filtros';

function App() {
  return (
    <div className="App">
      <Filtros />
      <VentasMensuales />
    </div>
  );
}

export default App;
