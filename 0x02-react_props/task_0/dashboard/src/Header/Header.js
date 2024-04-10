import logo from './holberton_Logo.jpg';

export const Header = () => {
    return(
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
    );
};