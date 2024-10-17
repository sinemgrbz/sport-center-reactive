import './bmi.css';
import bmiIndex from '../../assets/images/bmi-index.jpg';
import { useState, useRef } from 'react';

export default function Bmi() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);
    const [bmiClass, setBmiClass] = useState('');
    const infoDivRef = useRef(null);
    const imgDivRef = useRef(null);

    const handleCalculate = () => {
        if (!height || !weight || Number(height) === 0 || Number(weight) === 0) {
            // Bilgilendirme mesajını göster
            infoDivRef.current.classList.add('info-div-active');
            setTimeout(() => {
                infoDivRef.current.classList.remove('info-div-active');
            }, 2000);
        } else {
            // BMI hesaplama
            const bmiResult = weight / ((height / 100) ** 2);
            setResult(bmiResult.toFixed(2));
            
            // imgDiv'in sınıfını güncelle
            imgDivRef.current.classList.remove('show', 'normal', 'overweight', 'obese', 'extobese');
            if (bmiResult < 18.5) {
                imgDivRef.current.classList.add('show');
                setBmiClass('Underweight');
            } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
                imgDivRef.current.classList.add('show', 'normal');
                setBmiClass('Normal');
            } else if (bmiResult >= 25 && bmiResult < 29.9) {
                imgDivRef.current.classList.add('show', 'overweight');
                setBmiClass('Overweight');
            } else if (bmiResult >= 30 && bmiResult < 34.9) {
                imgDivRef.current.classList.add('show', 'obese');
                setBmiClass('Obese');
            } else {
                imgDivRef.current.classList.add('show', 'extobese');
                setBmiClass('Extremely Obese');
            }
        }
    };

    return (
        <>
            <section className="bmi">
                <div className="container bmi-cal">
                    <div className="bmi-cal-content">
                        <h3>BMI Calculator</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.
                        </p>
                        <div className="bmi-input-group">
                            <div className="input-group">
                                <input
                                    type="number"
                                    placeholder="Your Height"
                                    className="bmi-input height"
                                    min={0}
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <span>cm</span>
                            </div>
                            <div className="input-group">
                                <input
                                    type="number"
                                    placeholder="Your Weight"
                                    className="bmi-input weight"
                                    min={0}
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                                <span>kg</span>
                            </div>
                        </div>
                        <button type="button" className="calculate-btn" onClick={handleCalculate}>
                            Calculate
                        </button>
                        <div className="info-div" ref={infoDivRef}>
                            <p>Please enter your height and weight.</p>
                        </div>
                    </div>
                    <div className="bmi-result">
                        <h2>Your BMI</h2>
                        <div className="img-div" ref={imgDivRef}>
                            <img src={bmiIndex} alt="bmi" className="img-bmi" />
                        </div>
                        {result && (
                            <div className="result-div">
                                <p>Your BMI is {result} ({bmiClass})</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}