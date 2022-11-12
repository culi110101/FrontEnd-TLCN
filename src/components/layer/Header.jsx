import React from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';


const Header = () => {
    return (
        <div>
            <header className="sticky-top">
                <div className="header container-main_lvth">
                    <div className="row header-control">
                        <nav className="nav-handle px-2 px-xl-0">
                            <div className="container d-flex align-items-center justify-content-between p-1 p-lg-0">
                                <Logo></Logo>
                                <div className="nav-handle__list d-none d-lg-flex" id="navbarSupportedContent">
                                    <ul className="ms-auto mb-2 mb-lg-0 ps-0 d-flex nav-handle__list__items">
                                        <li className="nav-handle__list__items--name">
                                            <a className="p-0" aria-current="page" href="home">Home</a>
                                        </li>
                                        <li className="nav-handle__list__items--name">
                                            <a className="p-0" href="article.category ">Jobs</a>
                                        </li>
                                        <li className="nav-handle__list__items--name">
                                            <a className="p-0" href="article.detail">About Us</a>
                                        </li>
                                        <li className="nav-handle__list__items--name">
                                            <div className='m-2'>
                                            <Login></Login>
                                            </div>
                                            <div className='m-2'>
                                            <Register></Register>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <button className="d-block d-lg-none px-2 nav-handle__menu-btn" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <i>menu</i>
                                </button>
                                <div className="offcanvas offcanvas-end menu-mobile" tabIndex="-1" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <img className="w-50" src="<?= PUBLIC_ASSETS_URL ?>assets/imgs/logo.png" alt="img-logo"></img>
                                        <button type="button" className="btn close-btn" data-bs-dismiss="offcanvas">
                                            <i className="lp-close cl-P-red"></i>
                                        </button>
                                    </div>
                                    <div className="offcanvas-body navbar menu-mobile__content">
                                        <ul className="navbar-nav m-0 p-0 w-100 nav-handle__list__items">
                                            <li className="nav-item nav-handle__list__items--name">
                                                <a className="p-0" aria-current="page" href="home">TRANG CHỦ</a>
                                            </li>
                                            <li className="nav-item nav-handle__list__items--name">
                                                <a className="p-0" href="article.category ">BÀI VIẾT</a>
                                            </li>
                                            <li className="nav-item nav-handle__list__items--name">
                                                <a className="p-0" href="article.detail">GIỚI THIỆU</a>
                                            </li>
                                            <li className="nav-item nav-handle__list__items--name">
                                                <a className="p-0" href="article.detail">HỖ TRỢ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Header
