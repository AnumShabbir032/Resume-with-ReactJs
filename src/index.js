import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


function Hi() {
  
  return (
    <div className="main">
      <div className="left-div">
        <div className="mid-div">
          <div className="text">
            <h1>ANUM</h1>
            <h1>SHABBIR</h1>
            <span>Designer/Developer</span>
          </div>
          <div className="img-div">
            <img
              src="https://avatars.githubusercontent.com/u/68158837?v=4"
              width="100%"
              alt="new"
            />
          </div>
          <div className="content-div">
            <h3>Profile</h3>
            <p>
              I am an energetic, creative, self-motivated, and ambitious person
              who has developed a mature and responsible approach to any task
              that I undertake, or situation that I am presented with. A quick
              learner who applies that learned information effectively. I am a
              good timekeeper, always willing to learn new skills. I am
              friendly, helpful, and polite.
            </p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="div-one">
          <div className="box">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/cell-phone.png"
              width="30"
              alt="new"
            />
            <p>+92 699 5111</p>
          </div>
          <div className="box">
            <img
              src="https://img.icons8.com/color/48/000000/address--v1.png"
              width="30"
              alt="new"
            />
            <p>Karachi,Pakistan.</p>
          </div>
          <div className="box">
            <img
              src="https://img.icons8.com/fluency/48/000000/github.png"
              width="30"
              alt="new"
            />
            <p>
              <a href="https://github.com/AnumShabbir032" rel='opener'>
                AnumShabbir032
              </a>
            </p>
          </div>
          <div className="box">
            <img
              src="https://img.icons8.com/color/48/000000/gmail--v1.png"
              width="30"
              alt="new"
            />
            <p>Anumshabbir032@gmail.com</p>
          </div>
        </div>

        <div className="div-two">
          <div className="box-div">
            <h3>Educatiom</h3>
            <p> Bachelors in Commerce</p>
            <p>High School Certificate</p>
            <p>Secondary School Certificate</p>
          </div>
          <div className="box-div">
            <h3>Skill</h3>
            <p>
              I’m highly skilled in the use of computers and internet Access,
              Including Microsoft Office Word, Excel, Powerpoint, etc. Have
              certificates in Web-Development or a similar field Be proficient
              in coding languages such as HTML, CSS, and JavaScript, and
              understand server-side CSS. Be experienced with graphic design
              applications (e.g., Adobe Illustrator). Understand the principles
              of SEO. Also, have a good command of problem-solving.
            </p>
          </div>
        </div>

        <div className="div-three">
          <div className="box-div-three">
            <h3>Key Skill</h3>
            <p>Html</p>
            <p>Css</p>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>Node.js</p>
          </div>
          <div className="box-div-three">
            <h3>Languages</h3>
            <p>English</p>
            <p>Urdu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));