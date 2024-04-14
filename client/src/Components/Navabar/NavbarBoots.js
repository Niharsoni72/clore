import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../image/CLORE.png';
import accountIcon from '../../icons/account.svg';
import cartIcon from '../../icons/cart.svg';
import { useNavigate, NavLink } from 'react-router-dom';
import CartModal from '../Cart/CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/Navbar/Navbar.css';

const NavbarBoots = (props) => {
    const [modalViewer, setModalViewer] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const navigate = useNavigate();

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setUserId(localStorage.getItem('usersdatatoken'));
        if (userId) {
            setIsUserLoggedIn(true);
            console.log("User Is logged in successfully");
        }
    }, [isUserLoggedIn, userId]);

    const goToCart = () => {
        navigate('/Cart');
    }

    const goToFavourite = () => {
        navigate('/getfavourite');
    }

    return (
        <Fragment>
            {isUserLoggedIn &&
                <nav className="navbar navbar-expand-lg bg-light p-2">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex w-25 mt-0" role="search">
                                <input className="form-control rounded-pill" type="text" placeholder="Search" aria-label="Search"/>
                                <button className="invisible" type="submit"></button>
                            </form>
                            <div className="invisible">
                                <p>&nbsp .</p>
                            </div>
                            <ul className="navbar-nav ms-5 ps-5 mt-2">
                                <li className="nav-item mt-2">
                                    <NavLink className="nav-link text-dark mx-2" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-dark mx-2" href="/Shop">Shop</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink className="nav-link" to={"/"}><img src={pic} height={40} width={80} /></NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-dark mx-2" href="/about">About Us</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <NavLink className="nav-link text-dark mx-2" to={"/Contact"}>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className='navbar-nav ms-auto'>
                                <div
                                    onMouseEnter={() => setModalViewer(true)}
                                    onMouseLeave={() => setModalViewer(false)}>
                                    <div className="dropdown-menu-nav-bar">
                                        <NavLink to={"/Cart"} className='nav-link px-3'>
                                            <img src={cartIcon} height={30} width={30} />
                                        </NavLink>
                                        <div className="dropdown-links" onClick={goToCart}>
                                            <ul className="dropdown-lists">
                                                <li><CartModal /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a className='nav-link px-3' onClick={goToFavourite}><FontAwesomeIcon icon={faHeart} size="lg" /></a>
                                <NavLink to={"/Account"}><a className='nav-link px-3'><img src={accountIcon} height={30} width={30} /></a></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>}
            {!isUserLoggedIn &&
                <nav className="navbar navbar-expand-lg bg-light p-2">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex w-25 mt-0" role="search">
                                <input className="form-control rounded-pill" type="text" placeholder="Search" aria-label="Search"/>
                                <button className="invisible" type="submit"></button>
                            </form>
                            <div className="invisible">
                                <p>&nbsp .</p>
                            </div>
                            <ul className="navbar-nav ms-5 ps-5 mt-2">
                                <li className="nav-item mt-2">
                                    <NavLink className="nav-link text-dark mx-2" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-dark mx-2" href="/Shop">Shop</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink className="nav-link" to={"/"}><img src={pic} height={40} width={80} /></NavLink>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link text-dark mx-2" href="/aboutus">About Us</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <NavLink className="nav-link text-dark mx-2" to={"/Contact"}>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className='navbar-nav ms-auto'>
                                <NavLink className="nav-link text-dark mx-2" to={"/Register"}>Sign Up</NavLink>
                                <NavLink className="nav-link text-dark mx-2" to={"/Login"}>Login</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </Fragment>
    );
}

export default NavbarBoots;
