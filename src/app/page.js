import React from "react";
import Footer from "./Footer/Footer";

function Home() {
  const timestamp = new Date().toLocaleString();
  return (
    <div>
      <main>
        <h1>Hello Next!</h1>
      </main>
      <footer>Page rendered on {timestamp}</footer>
    </div>
  );
}

export default Home;
