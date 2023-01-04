import React from "react";
// import { Component } from "react";
import './hero.css';



function Hero() {
    
    return (

        <div className="hero grid place-items-center">
          <div className="md:container md:mx-auto">
            <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
              
              <div className="introduction">
                <h1 className="text-black text-l md:text-xl">
                  Hello, My Name is Adwitya Sadhu Prayastita
                </h1>
                <p>i'm a student at Universitas Jember on Information System's Bachelor Degree Program 💻
                  <br />You can Call me Dhu. What i do? as far i acknowledge my skill is Web Development especially front-end,
                  <br />Data Science, Mobile Development a litle bit. And some Office like Excel and word 😁  
                </p>
              </div>

              <div className="pfp mr-8">
                <img src='images/bmo.jpg' alt="" className="img-responsive rounded-full w-36" />
              </div>

            </div>
          </div>
          
        </div>



      
    );
  
}

export default Hero;
