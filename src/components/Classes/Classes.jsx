import './classes.css'
import yoga from '../../assets/images/yoga.jpg';
import solo from '../../assets/images/solo.jpg';
import group from '../../assets/images/group.webp';
import stret from '../../assets/images/stret.webp';
import { useState } from 'react';

const Classes = () => {

    const [activeClass, setActiveClass] = useState('yoga'); // Varsayılan olarak 'yoga' sınıfı aktif

  const buttons = [
    { name: 'Yoga', dataClass: 'yoga' },
    { name: 'Group', dataClass: 'group' },
    { name: 'Solo', dataClass: 'solo' },
    { name: 'Stretching', dataClass: 'stret' },
  ];

  const details = {
    yoga: {
      title: 'Why are your Yoga?',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: yoga,
    },
    group: {
      title: 'Why are your Group?',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: group,
    },
    solo: {
      title: 'Why are your Solo?',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: solo,
    },
    stret: {
      title: 'Why are your Stretching?',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      schedule: [
        'Saturday-Sunday: 8:00am - 10:00am',
        'Monday-Tuesday: 10:00am - 12:00pm',
        'Wednesday-Friday: 3:00pm - 6:00pm',
      ],
      image: stret,
    },
  };

  const handleClick = (dataClass) => {
    setActiveClass(dataClass);
  };


    return (
    <section id="classes">
      <div className="container classes">
        <div className="classes-content">
          <h2 className="header-border">OUR CLASSES</h2>
          <p className="common-p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum
            beatae delectus obcaecati nemo doloribus exercitationem quaerat non
            cumque ad.
          </p>
        </div>
        <div className="classes-buttons">
          {buttons.map((button) => (
            <button
              key={button.dataClass}
              type="button"
              className={`class-btn ${activeClass === button.dataClass ? 'active-btn' : ''}`}
              onClick={() => handleClick(button.dataClass)}
              data-class={button.dataClass}
            >
              {button.name}
            </button>
          ))}
        </div>

        {Object.keys(details).map((detail) => (
          <div
            key={detail}
            className={`classes-detail ${activeClass === detail ? 'classes-detail-active' : ''} ${detail}`}
          >
            <div className="classes-detail-content">
              <h3>{details[detail].title}</h3>
              <p>{details[detail].description}</p>
              <div className="class-schedule">
                <h3>When comes {details[detail].title.split(' ')[2]} Your Time.</h3>
                <ul>
                  {details[detail].schedule.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={details[detail].image} alt={detail} className="img-class" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;