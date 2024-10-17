import './hero.css';

export default function Hero() {
    return (
        <>
            <section className="hero" id="home">
            <div className="hero-bg">
                <div className="container about">
                <div className="center-name">
                    <h3>POWERFULL</h3>
                </div>
                <div className="section-content">
                    <h2>
                    Group <br />
                    Practice <br />
                    With Traniner
                    </h2>
                    <div className="content-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                        quam, alias totam repellat nemo cum odio doloribus sint, reiciendis
                        maxime in ullam tempora id saepe voluptas numquam! Repellat, error
                        quisquam?
                    </p>
                    </div>
                </div>
                <div className="hero-btn">
                    <button type="button" className="btn-sign">
                    Sign Up
                    </button>
                    <div className="btn-detail">
                    <a href="#">Details</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="hero-activity">
                <div className="container activity">
                <div className="activity-center">
                    <div className="active-course">
                    <h2>325</h2>
                    <h3>Course</h3>
                    <h3></h3>
                    </div>
                    <div className="active-course">
                    <h2>325</h2>
                    <h3>Work Out</h3>
                    </div>
                    <div className="active-course">
                    <h2>325</h2>
                    <h3>Working Hour</h3>
                    </div>
                    <div className="active-course">
                    <h2>705</h2>
                    <h3>Happt Client</h3>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}
