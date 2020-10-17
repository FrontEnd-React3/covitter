import React from "react";
import "./Main.css";
import Moment from 'react-moment';


export default function Main() {      

  return (    

    <div>      

         <main className="main-container">
        <h1>
          C<i className="fas fa-virus"></i>VID 19 <br></br>?
        </h1>
        <div>Check your sypmtoms online</div>
      </main>
      <p  className="main-warning">

        Globally,<br></br> as of 10:25am CEST, 12 October 2020, <br></br>there
        have been 37,326,080 confirmed cases of COVID-19, <br></br>including
        1,073,973 deaths, reported to WHO.{" "}
      </p>
    </div>
  );
}
