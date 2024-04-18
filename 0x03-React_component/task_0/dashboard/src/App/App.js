import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { Login } from '../Login/Login.js';
import PropTypes from "prop-types";
import { CourseList } from "../CourseList/CourseList";
import { getLatestNotification } from '../utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: true
    };
  }

  render() {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
    ];

    return (
      <>
        <div className="con-1">
          <Notifications listNotifications={listNotifications} />
          <div className="App">
            <div className="App-header">
              <Header />
            </div>
          </div>
        </div>
        <div className='App-body'>
          {this.state.isLogIn ? (
            <CourseList />
          ) : (
            <Login onLogin={() => this.setState({ isLogIn: true })} />
          )}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool
}

export default App;
