import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [speed, setSpeed] = useState("");
  let currentPos = window.pageYOffset;

  const callDistort = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    // const speed = diff * 0.35;
    setSpeed(diff * 0.35);

    currentPos = newPos;
    requestAnimationFrame(callDistort);
  };

  useEffect(() => {
    callDistort();
  }, []);

  return (
    <div className="content">
      <section className="distort" style={{ transform: `skewY(${speed}deg)` }}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1595425156626-aea746dfac22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h1>Boundary Supply</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            esse, delectus quidem quo ipsa praesentium eum laudantium provident.
            Odit pariatur error eligendi nihil nisi, consequatur neque molestias
            deleniti! Laborum suscipit illum magnam quo quod placeat velit vitae
            quisquam vel! Dolore?
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1594731516282-20194b3e9755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h1>Runway Three</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            esse, delectus quidem quo ipsa praesentium eum laudantium provident.
            Odit pariatur error eligendi nihil nisi, consequatur neque molestias
            deleniti! Laborum suscipit illum magnam quo quod placeat velit vitae
            quisquam vel! Dolore?
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1593725711138-5f3a5824cdf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h1>Waste Matters</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            esse, delectus quidem quo ipsa praesentium eum laudantium provident.
            Odit pariatur error eligendi nihil nisi, consequatur neque molestias
            deleniti! Laborum suscipit illum magnam quo quod placeat velit vitae
            quisquam vel! Dolore?
          </p>
        </div>
      </section>
    </div>
  );
}
