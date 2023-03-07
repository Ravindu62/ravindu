import React from "react";

function Services() {
  return (
    <div id="services">
      <div
        className="column"
        style={{ marginLeft: "150px", marginTop: "100px" }}
      >
        <h2 style={{ color: "beige", fontSize: "50px" }} className="title is-2">
          My Services
        </h2>
      </div>
      <div
        className="service-list"
        style={{ marginLeft: "150px", marginRight: "150px", marginTop: "40px" }}
      >
        <div className="columns">
          <div
            className="column is-one-third"
            style={{
              backgroundColor: "#3d3d3d",
              borderRadius: "10px",
              marginRight: "30px",
            }}
          >
            <div
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "30px",
              }}
            >
              <i
                style={{
                  fontSize: "50px",
                  color: "beige",
                  marginBottom: "30px",
                }}
                className="fas fa-code"
              />
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "beige",
                  marginBottom: "10px",
                }}
              >
                Web Design
              </h2>
              <p
                style={{
                  marginBottom: "20px",
                  color: "antiquewhite",
                  fontSize: "14px",
                }}
              >
                In this book, Dr. Frankl explains the experience which led to
                his discovery of logotherapy.
              </p>
              <a style={{ marginBottom: "50px" }} href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="column"
            style={{
              backgroundColor: "#3d3d3d",
              borderRadius: "10px",
              marginRight: "30px",
            }}
          >
            <div
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "30px",
              }}
            >
              <i
                style={{
                  fontSize: "50px",
                  color: "beige",
                  marginBottom: "30px",
                }}
                className="fas fa-crop-alt"
              />
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "beige",
                  marginBottom: "10px",
                }}
              >
                UI/UX Design
              </h2>
              <p
                style={{
                  marginBottom: "20px",
                  color: "antiquewhite",
                  fontSize: "14px",
                }}
              >
                In this book, Dr. Frankl explains the experience which led to
                his discovery of logotherapy.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div
            className="column"
            style={{ backgroundColor: "#3d3d3d", borderRadius: "10px" }}
          >
            <div
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "30px",
              }}
            >
              <i
                style={{
                  fontSize: "50px",
                  color: "beige",
                  marginBottom: "30px",
                }}
                className="fas fa-app-store"
              />
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "beige",
                  marginBottom: "10px",
                }}
              >
                App Development
              </h2>
              <p
                style={{
                  marginBottom: "20px",
                  color: "antiquewhite",
                  fontSize: "14px",
                }}
              >
                In this book, Dr. Frankl explains the experience which led to
                his discovery of logotherapy.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
