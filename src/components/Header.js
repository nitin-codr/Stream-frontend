import React from 'react';
import {Link} from 'react-router-dom';
import GoogleApis from './GoogleApis';

const Header = () => {
    return (
        <div className = "ui secondary pointing menu">
            <Link to = "/" className="item">
                Streamey
            </Link>
            <div className="right menu">
                <Link to = "/" className="item">
                    All Streams
                </Link>
                <GoogleApis />
            </div>
        </div>
    );
};

export default Header;