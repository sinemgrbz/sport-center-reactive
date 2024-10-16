import './bmi.css'
import bmiIndex from '../../assets/images/bmi-index.jpg';

const Bmi = () => {
    return (
        <>
            <section className="bmi">
                <div className="container bmi-cal">
                <div className="bmi-cal-content">
                    <h3>BMI Calculator</h3>
                    <p>
                    Contrary to popular beliet, Lorem Ipsum is not simply random text. it
                    has roots in a plece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                    </p>
                    <p>
                    Contrary to popular beliet, Lorem Ipsum is not simply random text. it
                    has roots in a plece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                    </p>
                    <div className="bmi-input-group">
                    <div className="input-group">
                        <input
                        type="number"
                        placeholder="Your Height"
                        className="bmi-input height"
                        min={0}
                        />
                        <span>cm</span>
                    </div>
                    <div className="input-group">
                        <input
                        type="number"
                        placeholder="Your Weight"
                        className="bmi-input weight"
                        min={0}
                        />
                        <span>kg</span>
                    </div>
                    </div>
                    <button type="button" className="calculate-btn">
                    Calculate
                    </button>
                    <div className="info-div ">
                    <p>Please enter your height and weight.</p>
                    </div>
                </div>
                <div className="bmi-result">
                    <h2>Your BMI</h2>
                    <div className="img-div">
                    <img src={bmiIndex} alt="bmi" className="img-bmi" />
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Bmi;