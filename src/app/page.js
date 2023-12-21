import React from "react";

function page() {
  const navBar = ["Buy Coffee", "About Me", "Portfolio", "Contact Me"];
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "5vw",
            height: "5vh",
            position: "absolute",
            backgroundColor: "red",
            top: 0,
            left: 200,
          }}
        >
          <video
            style={{
              opacity: 10,
              objectFit: "cover",
              width: "10vw",
              height: "10vh",
            }}
            src="/three.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div
          style={{
            width: "5vw",
            height: "5vh",
            position: "absolute",
            backgroundColor: "red",
            top: "67%",
            left: "62%",
          }}
        >
          <video
            style={{
              opacity: 10,
              objectFit: "cover",
              width: "10vw",
              height: "10vh",
            }}
            src="/two.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div
          style={{
            width: "80vw",
            height: "80vh",
            backgroundColor: "#333333",
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr",
          }}
        >
          <h1 style={{ color: "white", marginLeft: "25px" }}>
            <span style={{ color: "orange" }}> Cool </span>
            ProjectsOnly
          </h1>

          <div style={{ marginTop: "30px" }}>
            {navBar.map((item) => (
              <button
                className="btn"
                style={{
                  padding: "8px 10px",
                  borderRadius: "5px",
                  margin: "2px",
                  border: "none",
                }}
              >
                <a
                  href="https://youtube.com/@coolprojectsonly"
                  style={{
                    color: "",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}
                >
                  {item}
                </a>
              </button>
            ))}
          </div>

          <div
            style={{
              gridColumn: "span 2",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              backgroundColor: "white",
            }}
          >
            <div style={{ marginLeft: "25px", order: "2" }}>
              <h2
                style={{
                  color: "indigo",
                  textAlign: "center",
                  marginRight: "100px",
                }}
              >
                Hello
              </h2>
              <h1 style={{ color: "purple" }}>
                {" "}
                <span style={{ color: "indigo" }}>This is </span>
                <span style={{ color: "blue" }}>Cool</span>ProjectsOnly
              </h1>

              <h2 style={{ textAlign: "center", marginRight: "80px" }}>
                Subscribe for more Videos
              </h2>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <buton
                  className="sub"
                  style={{
                    padding: "10px 30px",
                    borderRadius: "5px",

                    marginRight: "100px",
                    cursor: "pointer",
                  }}
                >
                  <a
                    className="sublink"
                    href="https://youtube.com/@coolprojectsonly"
                    style={{ textDecoration: "none" }}
                  >
                    Subscribe
                  </a>
                </buton>
              </div>
            </div>
            <div style={{ order: "1", overflow: "hidden" }}>
              <img
                src="/dash1.jpg"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
