import { useEffect, useRef } from 'react';
import './header.css'; 
import logo from '../../assets/images/logo.png';

export default function Header() {
  const hamburgerMenuRef = useRef(null);
  const navBarRef = useRef(null);

  useEffect(() => {
    const header = document.getElementById('header');
    
    const headerScrolledHandler = () => {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    // Scroll olay dinleyicisini ekleyin
    document.addEventListener('scroll', headerScrolledHandler);

    // Hamburger menü tıklama olay dinleyicisi
    const handleHamburgerClick = () => {
      navBarRef.current.classList.toggle('navbar-link-hamburger');
    };

    hamburgerMenuRef.current.addEventListener('click', handleHamburgerClick);

    // Temizlik işlevi
    return () => {
      document.removeEventListener('scroll', headerScrolledHandler);
      hamburgerMenuRef.current.removeEventListener('click', handleHamburgerClick);
    };
  }, []); // Boş bağımlılık dizisi ile yalnızca bileşen ilk yüklendiğinde çalışır

  return (
    <>
      <header id="header">
        <div className="header header-container">
          <div className="logo">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
          <div className="hamburger-menu" ref={hamburgerMenuRef}>
            <i className="fa-solid fa-bars" />
          </div>
          <nav className="navbar">
            <ul className="navbar-link" ref={navBarRef}>
              <li><a href="#home">Home</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainer">Trainer</a></li>
              <li><a href="#review">Review</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#join-us">JOIN US</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}