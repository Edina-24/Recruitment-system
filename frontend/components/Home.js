
import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            India's <span className="highlight">#1 platform</span>
          </h1>
          <p className="sub-heading">For fresher jobs</p>

          <div className="auth-buttons">
            
            <button className="email-btn">Continue with Email</button>
          </div>
          <p className="terms">By continuing, you agree to our T&C.</p>
        </div>

        <div className="hero-right">
          <img
            src="https://i.pinimg.com/1200x/cb/c4/c7/cbc4c7760240b84411ea46b9d6e9c5b9.jpg"
            alt="students"
          />
        </div>
      </section>

      {/* Logos */}
      <section className="marquee-container">
        <div className="marquee-content">
          <h1 className="marquee-heading">
            10K+ <span>OPENINGS DAILY</span>
          </h1>
          <div className="marquee-track">
            <img src="https://i.pinimg.com/736x/75/70/30/757030bb2dee57dddd5446b78a783daf.jpg" alt="Amazon" />
            <img src="https://i.pinimg.com/1200x/41/48/a4/4148a42a67961d709ed243ac2b09eed4.jpg" alt="Coca Cola" />
            <img src="https://i.pinimg.com/736x/e9/4e/e6/e94ee680bb2fb5793cb0516a37c98b72.jpg" alt="Practo" />
            <img src="https://i.pinimg.com/736x/7c/1d/17/7c1d1781450402e49010726af8ba56fa.jpg" alt="OYO" />
            <img src="https://i.pinimg.com/736x/29/7a/18/297a18bfb75f78339c1d8a91f0dd48a9.jpg" alt="Paytm" />

            {/* Duplicate for smooth loop */}
            <img src="https://i.pinimg.com/736x/75/70/30/757030bb2dee57dddd5446b78a783daf.jpg" alt="Amazon" />
            <img src="https://i.pinimg.com/1200x/41/48/a4/4148a42a67961d709ed243ac2b09eed4.jpg" alt="Coca Cola" />
            <img src="https://i.pinimg.com/736x/e9/4e/e6/e94ee680bb2fb5793cb0516a37c98b72.jpg" alt="Practo" />
            <img src="https://i.pinimg.com/736x/7c/1d/17/7c1d1781450402e49010726af8ba56fa.jpg" alt="OYO" />
            <img src="https://i.pinimg.com/736x/29/7a/18/297a18bfb75f78339c1d8a91f0dd48a9.jpg" alt="Paytm" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
