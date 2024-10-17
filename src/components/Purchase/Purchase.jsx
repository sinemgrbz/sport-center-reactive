import './purchase.css'
import purchase1 from '../../assets/images/purchase1.jpg';
import purchase2 from '../../assets/images/purchase2.jpg';
import purchase3 from '../../assets/images/purchase3.jpg';
import purchase4 from '../../assets/images/purchase4.jpg';

export default function Purchace() {
    return (
        <>
        <section id="purchase">
        <div className="container purchase">
            <div className="purchase-content">
            <h2 className="header-border">PURCHASE FROM US</h2>
            <p className="common-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum
                beatae..
            </p>
            </div>
            <div className="purchase-card-group">
            <div className="purchase-card">
                <img
                src={purchase1}
                alt="purchase"
                className="img-purchase"
                />
                <div className="purchase-card-detail">
                <h3>Kettbeli / 5kg</h3>
                <p>
                    <span>89,99$</span> / 59,99$
                </p>
                <div className="cart-shop">
                    <i className="fa-solid fa-cart-shopping" />
                    <a href="#">Add To Cart</a>
                </div>
                </div>
            </div>
            <div className="purchase-card">
                <img
                src={purchase2}
                alt="purchase"
                className="img-purchase"
                />
                <div className="purchase-card-detail">
                <h3>Treadmill</h3>
                <p>
                    <span>899,99$</span> / 599,99$
                </p>
                <div className="cart-shop">
                    <i className="fa-solid fa-cart-shopping" />
                    <a href="#">Add To Cart</a>
                </div>
                </div>
            </div>
            <div className="purchase-card">
                <img
                src={purchase3}
                alt="purchase"
                className="img-purchase"
                />
                <div className="purchase-card-detail">
                <h3>Adjustable Dumbbell</h3>
                <p>
                    <span>89,99$</span> / 59,99$
                </p>
                <div className="cart-shop">
                    <i className="fa-solid fa-cart-shopping" />
                    <a href="#">Add To Cart</a>
                </div>
                </div>
            </div>
            <div className="purchase-card">
                <img
                src={purchase4}
                alt="purchase"
                className="img-purchase"
                />
                <div className="purchase-card-detail">
                <h3>Kettbell / 3kg</h3>
                <p>
                    <span>89,99$</span> / 59,99$
                </p>
                <div className="cart-shop">
                    <i className="fa-solid fa-cart-shopping" />
                    <a href="#">Add To Cart</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        </>
    )
};
