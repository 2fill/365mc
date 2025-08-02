"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './bodyComp.module.css';

const edemaOptions = [
    { label: 'No edema', className: 'edema-button-1' },
    { label: 'Mild edema', className: 'edema-button-2' },
    { label: 'Moderate to severe edema', className: 'edema-button-3' },
] as const;
type EdemaType = typeof edemaOptions[number]['label'] | null;

export default function Page() {
    const router = useRouter();

    const [height, setHeight] = useState<number | null>(null);

    return (
        <div className={styles.main}>
            <div className={styles['main-box']}>
                <img src="/Jibang-1.png" alt="Jibang1" className={styles['Jibang-img-1']} />

                <div className={styles['order-box']}>
                <div className={styles['order-item']}>
                    <div className={styles['circle-1']}>✔</div>
                    <div className={styles['text-1']}>Demographics</div>
                </div>
                <div className={styles['order-item']}>
                    <div className={styles['circle-2']}>✔</div>
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

                    <div className={styles['first-container']}>

                        {/* Height */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Height</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${height !== null && height !== 0 ? styles.focused : ''}`}
                                    value={height !== null ? height.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setHeight(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(height === null) setHeight(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setHeight(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setHeight(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <div className={styles.divider}></div>
                </div>

                <div className={styles['page-button-container']}>
                    <button
                        className={styles['back-button']}
                        onClick={() => router.push('/')}>
                        Back
                    </button>
                    <button className={styles['complete-button']}>
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
}