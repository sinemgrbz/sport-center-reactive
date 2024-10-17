import './trainer.css';
import trainer1 from '../../assets/images/trainer1.jpg';
import trainer2 from '../../assets/images/trainer2.jpg';
import trainer3 from '../../assets/images/trainer3.jpg'; 

export default function Trainer() {
    return (
        <>
        <section id="trainer">
            <div className="container trainer">
            <div className="trainer-content">
                <h2 className="header-border">OUR BEST TRAINERS</h2>
                <p className="common-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum
                beatae delectus obcaecati nemo doloribus exercitationem quaerat non
                cumque ad.
                </p>
            </div>
            <div className="trainer-info">
                <div className="trainer-card">
                <img
                    src={trainer1}
                    alt="trainer"
                    className="img-trainer"
                />
                <div className="trainer-info-detail">
                    <h3>Mary Mary</h3>
                    <p>Yogo Trainer</p>
                </div>
                </div>
                <div className="trainer-card">
                <img
                    src={trainer2}
                    alt="trainer"
                    className="img-trainer"
                />
                <div className="trainer-info-detail">
                    <h3>Tom Mary</h3>
                    <p>Body Trainer</p>
                </div>
                </div>
                <div className="trainer-card">
                <img
                    src={trainer3}
                    alt="trainer"
                    className="img-trainer"
                />
                <div className="trainer-info-detail">
                    <h3>Jane Doe</h3>
                    <p>Cardio Trainer</p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
