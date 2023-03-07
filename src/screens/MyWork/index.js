import React from "react";

function MyWorlk() {
  return (
    <div id="portfolio">
      <div
        className="column"
        style={{ marginLeft: "150px", marginTop: "60px" }}
      >
        <h2 style={{ color: "beige", fontSize: "50px" }} className="title is-2">
          My Work
        </h2>
      </div>
      <div
        style={{ marginLeft: "150px", marginRight: "150px", marginTop: "40px" }}
      >
        <div className="columns">
          <div className="column is-one-third">
            <div className="work">
              <img src="Images/images/work-1.png" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  The app connects you to the talented people around the
                  world.Download it from play store.
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="work">
              <img src="Images/images/work-2.png" />
              <div className="layer">
                <h3>Music App</h3>
                <p>
                  The app will give you every song that you should
                  listen.Download it from play store.
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="work">
              <img src="Images/images/work-3.png" />
              <div className="layer">
                <h3>Online Shopping App</h3>
                <p>
                  The app will brings you real online shopping
                  experience.Download it from play store.
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a style={{ alignSelf: "center" }} href="#" className="btn">
          See More
        </a>
      </div>
    </div>
  );
}

export default MyWorlk;
