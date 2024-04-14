
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import {Header} from '../Header/Header.js';
import {Footer} from '../Footer/Footer.js';
import {Login} from '../Login/Login.js';
import PropTypes from "prop-types";
import {CourseList} from "../CourseList/CourseList";
import { useState } from 'react';



function App() {

  const [isLogIn,setLoginIn]=useState(true);
  return (
    <>
    <div className="con-1">
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
      </div>
    </div>
      <div className='App-body'>
        {isLogIn ? (
          <CourseList/>
        ) : (
          <Login onLogin={() => setLoginIn(true)} />
        )}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
}

App.propTypes={
  isLogin: PropTypes.bool

}

export default App;
