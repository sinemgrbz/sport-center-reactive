import './review.css'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'

export default function Review() {
    return (
        <>
            <section id="review">
                <div className="container review">
                <div className="review-content">
                <h2 className="header-border">REVIEW CLIENT</h2>
                <p className="common-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum
                    beatae..
                </p>
                </div>
                <div className="review-group">
                <div className="review-detail">
                    <div className="client">
                    <img src={client1} alt="client" />
                    <div className="client-personal">
                        <h4>Diet Expert</h4>
                        <h5>CFO</h5>
                    </div>
                    </div>
                    <div className="client-review">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                        enim ut architecto accusantium assumenda voluptatibus quasi optio
                        aspernatur consequatur vel nemo, delectus possimus quidem facilis
                        amet neque at incidunt explicabo.
                    </p>
                    </div>
                </div>
                <div className="review-detail">
                    <div className="client">
                    <img src={client2} alt="client" />
                    <div className="client-personal">
                        <h4>Cardio trainer</h4>
                        <h5>CEO</h5>
                    </div>
                    </div>
                    <div className="client-review">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                        enim ut architecto accusantium assumenda voluptatibus quasi optio
                        aspernatur consequatur vel nemo, delectus possimus quidem facilis
                        amet neque at incidunt explicabo.
                    </p>
                    </div>
                </div>
                </div>
                </div>
            </section>

        </>
    )
};
