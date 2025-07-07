"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './lipoInfo.module.css';

export default function Page() {
    const router = useRouter();

    const [selected, setSelected] = useState<"Lams" | "Surgery" | null>(null);
    const [size, setSize] = useState<number | null>(null);

    const handleClick = (gender: "Lams" | "Surgery") => {
        if(selected === gender){
            setSelected(null);
        }
        else {
            setSelected(gender);
        }
    };

    const increment = () => {
        setSize((prev) => (prev === null ? 1 : prev + 1));
    };

    const decrement = () => {
        setSize((prev) => {
        if(prev === null) return 0;
        if (prev <= 0) return 0;
        return prev - 1;
        });
    };

    const handleNextClick = () => {
        if(selected && size !== null && size > 0){
        router.push("/BodyComp");
        }
        else{
        alert("Please fill in the required fields.");
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles['main-box']}>
                <img src="/Jibang-1.png" alt="Jibang1" className={styles['Jibang-img-1']} />

                <div className={styles['order-box']}>
                <div className={styles['order-item']}>
                    <div className={styles['circle-1']}>1</div>
                    <div className={styles['text-1']}>Demographics</div>
                </div>
                <div className={styles['order-item']}>
                    <div className={styles['circle-2']}>2</div>
                    <div className={styles['text-2']}>
                    Liposuction<br />
                    Information</div>
                </div>
                <div className={styles['order-item']}>
                    <div className={styles['circle-3']}>3</div>
                    <div className={styles['text-3']}>
                    Body<br />
                    composition
                    </div>
                </div>
                </div>

                <div className={styles['form-box']}>
                    <div className={styles['type-box']}>
                        <div className={styles['type-label']}>Type</div>
                        <div className={styles['type-button']}>
                            <button
                                className={`${styles['type-button-1']} ${selected === "Lams" ? styles.selected : ""}`}
                                onClick={() => handleClick("Lams")}>
                                Lams
                            </button>
                            <button
                                className={`${styles['type-button-2']} ${selected === "Surgery" ? styles.selected : ""}`}
                                onClick={() => handleClick("Surgery")}>
                                Surgery
                            </button>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <div className={styles.divider}></div>

                    <div className={styles['size-box']}>
                        <div className={styles['size-label']}>Size</div>
                        <div className={styles['size-controls']}>
                        <input
                            type="number"
                            // 포커스 여부에 따라 클래스 이름 변경
                            className={`${styles['size-textBox']} ${size !== null ? styles.focused : ""}`}
                            // input 창에 표시될 값 
                            value={size !== null ? size.toString() : ""}
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
                                setSize(isNaN(num) ? null : num);
                            }}
                            onFocus={() => {
                                if (size === null) setSize(0);
                            }}
                        />
                        <button className={styles['plus-button']} onClick={increment}>+</button>
                        <button className={styles['minus-button']} onClick={decrement}>-</button>
                        </div>
                    </div>
                </div>

                <div className={styles['next-button-container']}>
                    <button className="next-button" onClick={handleNextClick}>
                    Next
                    </button>
                </div>

            </div>
        </div>
    );
}