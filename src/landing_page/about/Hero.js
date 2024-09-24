import React from 'react';

function Hero() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
        Revolutionizing stock trading with unbeatable value 
          <br />
          Now, redefining the future with cutting-edge technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
          In 2024, StockGlide was launched with the mission of creating 
          a seamless trading experience for investors and traders across India.
           Our goal is to eliminate the friction that people face in stock trading,
           whether it's high fees, complicated platforms, or lack of real-time support. 
           The name StockGlide represents our commitment to making your stock market journey 
           smooth and effortless—where you can glide through market trends with ease, confidence, 
           and cutting-edge technology.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
    );
}

export default Hero;