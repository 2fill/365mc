"use client";

import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<"male" | "female" | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const handleClick = (gender: "male" | "female") => {
    if(selected === gender){
      setSelected(null);
    }
    else {
      setSelected(gender);
    }
  };

  const increment = () => {
    setAge((prev) => (prev === null ? 1 : prev + 1));
  };

  const decrement = () => {
    setAge((prev) => {
      if(prev === null) return 0;
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };

  return (
    <div className="main">
      <div className="main-box">
        <img src="/Jibang-1.png" alt="Jibang1" className="Jibang-img-1" />

        <div className="order-box">
          <div className="order-item">
              <div className="circle-1">1</div>
              <div className="text-1">Demographics</div>
          </div>
          <div className="order-item">
            <div className="circle-2">2</div>
            <div className="text-2">
              Liposuction<br />
              Information</div>
          </div>
          <div className="order-item">
            <div className="circle-3">3</div>
            <div className="text-3">
              Body<br />
              composition
            </div>
          </div>
        </div>

        <div className="form-box">
          <div className="sex-box">
            <div className="sex-label">Sex</div>
            <div className="sex-button">
              <button
                className={`sex-button-1 ${selected === "male" ? "selected" : ""}`}
                onClick={() => handleClick("male")}>
                  Male
              </button>
              <button
                className={`sex-button-2 ${selected === "female" ? "selected" : ""}`}
                onClick={() => handleClick("female")}>
                  Female
              </button>
            </div>
          </div>

          {/* 구분선 */}
          <div className="divider"></div>

          <div className="age-box">
            <div className="age-label">Age</div>
            <div className="age-controls">
              <div className="age-textBox">{age}</div>
              <button className="plus-button" onClick={increment}>+</button>
              <button className="minus-button" onClick={decrement}>-</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}