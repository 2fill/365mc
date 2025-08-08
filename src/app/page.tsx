"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { InputData } from '@/lib/api';



export default function Page() {
  const router = useRouter();

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

  const [inputData, setInputData] = useState<Partial<InputData>>({});
  const handleNextClick = () => {
    if(selected && age !== null && age > 0){
      const newInputData = {
        ...inputData,
        Sex: selected === "male" ? 1 : 2,
        Age: age,
      };
      setInputData(newInputData);
      localStorage.setItem("inputData", JSON.stringify(newInputData));

      router.push("/LipoInfo");
    }
    else{
      alert("⚠ Please fill in *all fields* with valid values.");
    }
  }

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
            <input
              type="number"
              // 포커스 여부에 따라 클래스 이름 변경
              className={`age-textBox ${age !== null ? "focused" : ""}`}
              // input 창에 표시될 값 
              value={age !== null ? age.toString() : ""}
              onChange={(e) => {
                let value = e.target.value;
                
                // 최대 3자리
                if (value.length > 3) {
                  value = value.slice(0, 3);
                }
                
                // 0으로 시작하면, 0 제거
                if (value.startsWith("0")) {
                  value = value.replace(/^0+/, "");
                }
                
                // 문자를 숫자로 다시 변경 
                const num = parseInt(value);
                // 숫자 유효하면 저장 
                setAge(isNaN(num) ? null : num);
              }}

              onFocus={() => {
                if (age === null) setAge(0);
              }}
            />
              <button className="plus-button" onClick={increment}>+</button>
              <button className="minus-button" onClick={decrement}>-</button>
            </div>
          </div>
        </div>

        <div className="next-button-container">
          <button className="next-button" onClick={handleNextClick}>Next</button>
        </div>

      </div>
    </div>
  );
}