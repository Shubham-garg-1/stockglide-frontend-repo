import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Shubhamimage.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shubham Garg</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Shubham bootstrapped and founded StockGlide in 2024 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            StockGlide has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is passionate for his work, and want to solve the different life problems with his Tech skills.
          </p>
          <p>Love to play cricket</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;