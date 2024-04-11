
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import {Header} from '../Header/Header.js';
import {Footer} from '../Footer/Footer.js';
import {Login} from '../Login/Login.js';
import PropTypes from "./Props-type";
import {CourseList} from "../CourseList";
import { useState } from 'react';

const [isLogIn,setLoginIn]=useState(false);

function App() {
  return (
    <>
      <Notifications />
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className='App-body'>
        {isLogIn ? (
          <CourseList/>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
    </>
  );
}

App.propTypes={
  isLogin: PropTypes.bool

}

export default App;
