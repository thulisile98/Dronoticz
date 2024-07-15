import React from "react";
import drone1 from "../Assets/drone1.png";
import drone2 from "../Assets/drone2.jpg";
import drone4 from "../Assets/drone4.jpg";
import drone6 from "../Assets/drone6.jpg";




const ArticlesSection = () => {
  return (
    <div className="background">
      <section className="myclass">
        <div className="container">
          <div className="latest">
            <h2>LATEST ARTICLES</h2>
            <hr />
        </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone1} alt="" width={300} height={300} />
                <hr />
                <p>How to automate surveillance drones</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone2} alt=""  width={300} height={300} /><br />
                <hr />
                <p>Robotics and Artificial Intelligence</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone4} alt=""  width={300} height={300} /><br />
                <hr />
                <p>Improve Lives through Robotics Prosthetics</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone6} alt=""  width={300} height={300} /><br />
                <hr />
                <p>Power of Robotics in Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default ArticlesSection;

  