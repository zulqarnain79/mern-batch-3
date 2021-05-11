import React from 'react'
import './Header.css';
import logo from '../../assets/kfc-logo.jpg';

function Header() {

    return (
        <div className="header-wrapper">
            <div className="header-inner">
                <div className="item">
                    <img src={logo} alt="logo" />
                </div>
                {/* /.item */}
                <div className="item">
                    <ul>
                        <li>Store Location</li>
                        <li>Register / Login</li>
                    </ul>
                </div>
                {/* /.item */}
            </div>
            {/* /.header-inner */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Everyday Value</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Make It A Meal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signature Boxes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sharing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Promotions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Snacks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sheri Deals</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">0</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* /.navbar */}

        </div>
        /* /.header-wrapper */
    )
}

export default Header