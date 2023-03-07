import React from "react";

function AboutMe() {
  return (
    <div id="about">
      <div className="columns">
        <div
          className="column is-one-third"
          style={{ marginLeft: "150px", marginTop: "100px" }}
        >
          <img
            src="Images/fb profile pic.jpg"
            style={{ borderRadius: "15px" }}
            width={400}
            height={1000}
          />
        </div>
        <div
          className="column"
          style={{ marginLeft: "10px", marginTop: "100px" }}
        >
          <h2
            style={{ color: "beige", fontSize: "50px" }}
            className="title is-2"
          >
            About Me
          </h2>
          <p style={{ color: "#949494", marginRight: "100px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            aperiam quisquam veritatis! Quasi distinctio, excepturi illo quaerat
            quam veritatis odio, nesciunt ratione minus maiores nam, neque
            debitis velit earum. Tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis magni facere, recusandae incidunt
            corporis impedit quia eveniet aperiam soluta nihil reiciendis
            dolore, tempore eos, minima laboriosam maiores amet. Nesciunt,
            doloremque?
          </p>
          <div>
            <div className="tab-titles">
              <p className="tab-links active-link" onClick="opentab('skills')">
                Skills
              </p>
              <p className="tab-links" onClick="opentab('experience')">
                Experience
              </p>
              <p className="tab-links" onClick="opentab('education')">
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web Application Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/IOS Appications
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>Associate Image Processor</span>
                  <br />
                  2020/10 - 2021/01 - Orel It
                </li>
                <li>
                  <span>Assistant Boilar Operator</span>
                  <br />
                  2021/03 - 2021/07 - Plywood Manufactures
                </li>
                <li>
                  <span>Cashier &amp; Sales Person</span>
                  <br />
                  2021/10 - 2022/06 - Pincha Collections Pvt(Ltd)
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2017</span>
                  <br />
                  Passed G.C.E.Ordinary Level with A8 &amp; B1
                </li>
                <li>
                  <span>2020</span>
                  <br />
                  Passed G.C.E.Advanced Level with A3 in Art Scheme
                </li>
                <li>
                  <span>Present</span>
                  <br />
                  Undergraduate at UCSC studying Bsc. in Information Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
