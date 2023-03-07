import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="columns">
        <div
          className="column is-two-fifths"
          style={{ marginLeft: "120px", marginTop: "60px" }}
        >
          <h2
            style={{ color: "beige", fontSize: "50px", marginBottom: "60px" }}
            className="title is-2"
          >
            Contact Me
          </h2>
          <p>
            <i style={{ color: "#e8f007" }} className="fa-solid fa-envelope" />
            ravindupasannanayakkara@gmail.com
          </p>
          <br />
          <p>
            <i style={{ color: "#e8f007" }} className="fa-solid fa-phone" />
            +(94)761913194
          </p>
          <br />
          <p>
            <i
              style={{ color: "#e8f007" }}
              className="fa-solid fa-location-dot"
            />
            Mangala, Keradewala, Majuwana, Hikkaduwa
          </p>
          <br />
          <div className="social-icons">
            <a style={{ marginRight: "10px" }} href="http://facebook.com/">
              <i
                style={{ color: "#e8f007" }}
                className="fa-brands fa-facebook"
              />
            </a>
            <a style={{ marginRight: "10px" }} href="http://instargram.com/">
              <i
                style={{ color: "#e8f007" }}
                className="fa-brands fa-instagram"
              />
            </a>
            <a style={{ marginRight: "10px" }} href="http://linkdin.com/">
              <i
                style={{ color: "#e8f007" }}
                className="fa-brands fa-linkedin"
              />
            </a>
            <a style={{ marginRight: "10px" }} href="http://github.com/">
              <i style={{ color: "#e8f007" }} className="fa-brands fa-github" />
            </a>
            <a style={{ marginRight: "10px" }} href="http://twitter.com/">
              <i
                style={{ color: "#e8f007" }}
                className="fa-brands fa-twitter"
              />
            </a>
          </div>
          <br />
          <div className="control">
            <a
              href="images/Ravindu Nanayakkara CV.pdf"
              download
              className="btn btn2"
            >
              Download CV
            </a>
          </div>
        </div>
        <div
          className="column"
          style={{ marginTop: "60px", marginRight: "200px", marginLeft: "0%" }}
        >
          <textarea
            style={{
              color: "rgb(150, 145, 145)",
              backgroundColor: "#3d3d3d",
              borderColor: "#3d3d3d",
            }}
            className="textarea"
            placeholder="1 lines of textarea"
            rows={1}
            defaultValue={"Your Name"}
          />
          <br />
          <textarea
            style={{
              color: "rgb(150, 145, 145)",
              backgroundColor: "#3d3d3d",
              borderColor: "#3d3d3d",
            }}
            className="textarea"
            placeholder="1 lines of textarea"
            rows={1}
            defaultValue={"Your E-mail"}
          />
          <br />
          <textarea
            style={{
              color: "rgb(150, 145, 145)",
              backgroundColor: "#3d3d3d",
              borderColor: "#3d3d3d",
            }}
            className="textarea"
            placeholder="5 lines of textarea"
            rows={5}
            defaultValue={"Your Message"}
          />
          <br />
          <div className="control">
            <button className="btn btn2" style={{ fontWeight: 500 }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
