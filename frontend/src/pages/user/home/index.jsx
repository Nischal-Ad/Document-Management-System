import React from "react";

const index = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
      <div class="card">
        <div class="card-body"></div>
        <h5 class="card-title">All documents</h5>
      </div>
      <div
        className="rectangle"
        style={{ width: 1082, height: 380, background: "#D9D9D9" }}
      >
        <h3 className="text-center" style={{ fontWeight: "700" }}>
          Latest Documents
        </h3>
      </div>
    </>
  );
};

export default index;
