import {getFullYear, getFooterCopy} from '../utils.js';
import React from "react";
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    );
};