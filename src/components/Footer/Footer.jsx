import './footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <>
        <footer className="footer" id="footer">
            <div className="container">
                <img src={logo} alt="logo" className="logo-img" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis
                aliquam vel architecto molestiae id magnam, qui nihil laboriosam ex ipsa
                deserunt repellat tempore voluptas quidem voluptate? Cumque, optio
                voluptas.
                </p>
                <div className="footer-link-group">
                <div className="footer-link">
                    <h4>Information</h4>
                    <ul>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Classes</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    </ul>
                </div>
                <div className="footer-link">
                    <h4>Helpful Links</h4>
                    <ul>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Supports</a>
                    </li>
                    <li>
                        <a href="#">Terms &amp; Condition</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="copyright" style={{ textAlign: "center" }}>
                Telif Hakkı © 2024 Sinem. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
        </>
    )

};

export default Footer;