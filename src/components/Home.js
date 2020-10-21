import React from "react";
import "../App.css";
import Photo from '../img/glassproj.png'

function Home() {
  return (
    <div>
        <img className='homeImg' src={Photo} alt=''/>
    </div>
  );
}

export default Home;
