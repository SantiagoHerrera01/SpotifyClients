import Menu from "../Menu/Menu";
import Music from "../Music/Music";
import "./Home.css";
import React from "react";

function Home() {
  
  return (
    <>
      <header>
        <Menu />
      </header>

      <main>
        <div className="banner text-white ">
          <h3 className="fuente">SpotyFake</h3>
          <h5>grandes Exitos</h5>
          <Music /> 
          
        </div>
        
      </main>
      <section>
        
      </section>
    </>
  );
}

export default Home;
