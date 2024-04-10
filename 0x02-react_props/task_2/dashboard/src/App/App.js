
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import {Header} from '../Header/Header.js';
import {Footer} from '../Footer/Footer.js';
import {Login} from '../Login/Login.js';



function App() {
  return (
    <>
      <Notifications />
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className='App-body'>
        <Login />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
