import {getFullYear, getFooterCopy} from '../utils.js';

export const Footer = () => {
    return (
        <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    );
};