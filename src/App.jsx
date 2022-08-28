import './App.css';
import { Carnets } from './components/carnets';
import { bdCarnets } from './components/bdcarnets'


function App() {
  return (
    <div className="App">
      {bdCarnets.map(item =>
        <Carnets cedula={item.cedula} name={item.name} tipo={item.tipo}
        />)}
    </div>
  );
}

export default App;
