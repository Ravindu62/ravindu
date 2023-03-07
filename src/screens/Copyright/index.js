import React from "react";

function CopyRight() {
  return (
    <div
      style={{
        backgroundColor: "#262626",
        color: "beige",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}
      >
        Copyright
        <i style={{ color: "#e8f007" }} className="fa-solid fa-copyright" />
        Ravindu. Made with by HTML and Bulma CSS
      </p>
    </div>
  );
}

export default CopyRight;
