import { useEffect } from "react";
import asd from "./asd.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import reactImg from "./undraw_typewriter.svg";
import reactImg2 from "./undraw_react.svg";
import reactImg3 from "./undraw_around_the_world.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    let lightBtn = document.querySelector(".lightBtn");
    lightBtn.addEventListener("click", () => {
      let body = document.querySelector("body");
      document.querySelector(".lightBtn").style.display = "none";
      document.querySelector(".darkBtn").style.display = "inline-block";
      document.body.classList.add("darkTheme");
      document.querySelector(".navbar").classList.add("darkTheme");
      document.querySelector(".main-div").classList.add("darkTheme");
      document.querySelector(".align-text-top").classList.add("darkTheme");
      document.querySelector(".main-heading").classList.add("darkHeading");
      document.querySelector(".sub-heading").classList.add("darkHeading");
    });

    let darkBtn = document.querySelector(".darkBtn");
    darkBtn.addEventListener("click", () => {
      document.querySelector(".navbar").classList.remove("darkTheme");
      document.querySelector(".main-div").classList.remove("darkTheme");
      document.querySelector(".align-text-top").classList.remove("darkTheme");
      document.querySelector(".main-heading").classList.remove("darkHeading");
      document.querySelector(".sub-heading").classList.remove("darkHeading");
      document.body.classList.remove("darkTheme");
      document.querySelector(".lightBtn").style.display = "inline-block";
      document.querySelector(".darkBtn").style.display = "none";
    });

    let link = document.querySelector(".link");
    link.addEventListener("click", () => {
      window.open(
        "https://github.com/Sarib-Siddique",
        "_blank",
        "noopener, noreferrer"
      );
    });
  });

  return (
    <div>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div>
            <div className="container-fluid">
              <p
                className="navbar-brand dark"
                style={{ margin: "0", display: "flex", alignItems: "center" }}
              >
                <img
                  src={asd}
                  alt=""
                  style={{
                    width: "30px",
                    height: "24px",
                    marginRight: "10px",
                    backgroundColor: "powderblue",
                  }}
                  className="d-inline-block align-text-top"
                />

                <div className="main-div" style={{ display: "inline-block" }}>
                  <p style={{ display: "inline-block", margin: "0" }}>
                    My Site
                  </p>
                  <p
                    style={{
                      display: "inline-block",
                      margin: "0",
                      marginLeft: "30px",
                      fontSize: "18px",
                    }}
                  >
                    Tutorial
                  </p>
                  <p
                    style={{
                      display: "inline-block",
                      margin: "0",
                      marginLeft: "20px",
                      fontSize: "18px",
                    }}
                  >
                    Blog
                  </p>
                </div>
              </p>
            </div>
          </div>
          <div style={{ padding: "0px 12px", margin: "0", display: "flex" }}>
            <p className="github" style={{ margin: "0" }}>
              <div className="link" style={{ display: "inline-block" }}>
                Github
                <OpenInNewIcon
                  style={{
                    fontSize: "16px",
                    marginRight: "16px",
                    display: "inline-block",
                  }}
                />
              </div>
              <LightModeOutlinedIcon
                className="lightBtn"
                style={{ display: "inline-block" }}
              />
              <DarkModeIcon className="darkBtn" style={{ display: "none" }} />
            </p>
          </div>
        </nav>
      </div>
      <div
        style={{
          height: "400px",
          background: "#328259",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className="main-heading"
          style={{ textAlign: "center", fontWeight: "700", fontSize: "50px" }}
        >
          My Site
        </h1>
        <h4
          className="sub-heading"
          style={{ fontWeight: "400", paddingTop: "35px" }}
        >
          Dinosaours are cool
        </h4>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ marginTop: "35px" }}
        >
          Docusaurus Tutorial - 5min⏲
        </button>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={reactImg}
            alt=""
            srcset=""
            style={{ width: "200px", height: "auto" }}
          />
          <h3 style={{ marginTop: "30px" }}>Easy to Use</h3>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Docusaurus was designed from the ground up to be
            <br />
            easily installed and used to get your website up and
            <br /> running quickly.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={reactImg2}
            alt=""
            srcset=""
            style={{ width: "200px", height: "auto" }}
          />
          <h3 style={{ marginTop: "30px" }}>Powered by React</h3>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Extend or customize your website layout by reusing
            <br /> React. Docusaurus can be extended while reusing the
            <br /> same header and foot
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={reactImg3}
            alt=""
            srcset=""
            style={{ width: "200px", height: "auto" }}
          />
          <h3 style={{ marginTop: "30px" }}>Focus on What Matters</h3>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Docusaurus lets you focus on your docs, and we'll do
            <br /> the chores. Go ahead and move your docs into the
            <br /> docs directory.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
