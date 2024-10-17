import { useEffect } from 'react';
import './header.css'; 
import logo from '../../assets/images/logo.png';

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    
    const headerScrolledHandler = () => {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    // Olay dinleyicisini ekleyin
    document.addEventListener('scroll', headerScrolledHandler);

    // Temizlik işlevi
    return () => {
      document.removeEventListener('scroll', headerScrolledHandler);
    };
  }, []); // Boş bağımlılık dizisi ile yalnızca bileşen ilk yüklendiğinde çalışır

      
    return (
        <>
        <header id="header">
        <div className="header header-container">
            <div className="logo">
            <img src={logo} alt="logo" className="logo-img" />
            </div>
            <div className="hamburger-menu">
            <i className="fa-solid fa-bars" />
            </div>
            <nav className="navbar">
            <ul className="navbar-link ">
                <li>
                <a href="#home">Home</a>
                </li>
                <li>
                <a href="#classes">Classes</a>
                </li>
                <li>
                <a href="#trainer">Trainer</a>
                </li>
                <li>
                <a href="#review">Review</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
                <li>
                <a href="#join-us">JOIN US</a>
                </li>
            </ul>
            </nav>
        </div>
        </header>

        </>
    )
}


export default Header