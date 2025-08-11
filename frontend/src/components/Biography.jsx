import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to our Hospital Management System — a modern solution built
            to simplify healthcare operations. Our mission is to connect
            patients, doctors, and administrative staff through a seamless and
            efficient platform. With a strong focus on security, accuracy, and
            ease of use, we ensure that every appointment, report, and record is
            handled with care.
          </p>
          <p>We are committed to healthcare innovation in 2024 and beyond!</p>
          <p>
            Our system is developed using the MERN Stack for speed, scalability,
            and reliability.
          </p>
          <p>
            From booking appointments to managing patient histories, our
            application streamlines hospital workflows and improves patient
            experiences. Real-time updates, secure authentication, and intuitive
            design help medical staff focus more on care and less on paperwork.
          </p>
          <p>Your health, our priority — always.</p>
          <p>Because in healthcare, every second matters!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
