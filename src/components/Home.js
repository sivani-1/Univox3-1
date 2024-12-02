import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Univox</h1>
        <p>Your one-stop solution for AI-powered training and testing tools.</p>
      </main>
    </div>
  );
}

export default Home;
