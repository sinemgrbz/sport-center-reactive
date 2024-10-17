import './contact.css';

export default function Contact() {
    return (
        <>
        <section id="contact">
            <div className="container contact">
            <div className="contact-content">
            <h2 className="header-border">CONTACT US</h2>
            <p className="common-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                repellendus iusto eligendi minus corporis necessitatibus quod atque
                sequi.
            </p>
            </div>
            <div className="contact-detail">
            <div className="contact-form">
                <div className="contact-info">
                <div className="contact-info-detail">
                    <h4>Mobile Number</h4>
                    <p>
                    <a href="tel:+1357733214422">+135 773 321 4422</a>
                    </p>
                </div>
                <div className="contact-info-detail">
                    <h4>Email Address</h4>
                    <p>
                    <a href="mailto:demo@demo.com">demo@demo.com</a>
                    </p>
                </div>
                </div>
                <form className="form">
                <fieldset>
                    <legend>Make An Appoinment</legend>
                    <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required=""
                        placeholder="Your Name"
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required=""
                        placeholder="Your Email"
                    />
                    </div>
                    <div className="form-group">
                    <textarea
                        name="message"
                        id="message"
                        required=""
                        placeholder="Your Message"
                        defaultValue={""}
                    />
                    </div>
                    <button type="submit" className="submit-button">
                    Submit
                    </button>
                </fieldset>
                </form>
            </div>
            <div className="map-container">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47757.39046393009!2d35.87391608440106!3d41.57277432512142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088984b9dfe0e95%3A0xdd34bf6997b023ed!2sBafra%2C%20Samsun!5e0!3m2!1str!2str!4v1727437944521!5m2!1str!2str"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
            </div>
        </section>
        </>
    )
};

