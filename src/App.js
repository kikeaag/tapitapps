import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import FormComponent from "./components/FormComponent";



function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">TapitApps</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
      

      <div className="container">
        <FormComponent/>
      </div>



    </div>
    
  );
}

export default App;
