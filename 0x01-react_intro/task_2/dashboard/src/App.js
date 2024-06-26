import logo from './holberton_Logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label>
          Email:
          <input type ='email'/>
        </label>
        <label>
          Password:
          <input type= 'password'/>
        </label>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div> 
    </div>
  );
}

export default App;