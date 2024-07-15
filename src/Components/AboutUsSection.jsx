import React from 'react';
import drone8 from "../Assets/drone8.jpg";

const AboutUsSection = () => {
  return (
    <div className="paragraph-container">
      <div className="Asset">
      <img className="card-img-top" src={drone8} alt=""  />
      </div>
      <div className="content">
        <div className="about">
          <h2>
            ABOUT US
            <hr />
          </h2>
        </div>
        <div className="paragraph">
        <p >
          to shape the future. We revolutionize industries and improve lives
          worldwide through our passion for pushing the boundaries of what
          robots can do. With expertise in AI, computer vision, mechanical
          engineering, and automation, we lead the way in the robotics
          revolution. Our brilliant team creates intelligent machines that
          seamlessly integrate into daily life, enhancing productivity,
          safety, and efficiency. Join us on this exciting journey as we
          unlock new frontiers, solve complex challenges, and shape a future
          where intelligent machines work hand-in-hand with humans. Discover
          the power of robotics and be part of the revolution.
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUsSection;
