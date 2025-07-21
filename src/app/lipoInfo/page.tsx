"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './lipoInfo.module.css';

export default function Page() {
    const router = useRouter();

    const [selectedType, setSelectedType] = useState<"Lams" | "Surgery" | null>(null);
    const [selectedSite, setSelectedSite] = useState<string | null>(null);

    const handleClick = (gender: "Lams" | "Surgery") => {
        if(selectedType === gender){
            setSelectedType(null);
        }
        else {
            setSelectedType(gender);
        }
    };

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
                        <div className={styles['type-label']}>Liposuction Type</div>
                        <div className={styles['type-button']}>
                            <button
                                className={`${styles['type-button-1']} ${selectedType === "Lams" ? styles.selectedType : ""}`}
                                onClick={() => handleClick("Lams")}>
                                Lams
                            </button>
                            <button
                                className={`${styles['type-button-2']} ${selectedType === "Surgery" ? styles.selectedType : ""}`}
                                onClick={() => handleClick("Surgery")}>
                                Surgery
                            </button>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <div className={styles.divider}></div>

                    <div className={styles['site-box']}>
                        <div className={styles['site-label']}>Liposuction Site</div>
                        <div className={styles['site-buttons']}>
                            {['Abdomen', 'Arms', 'Backs', 'Buttocks', 'Calves', 'Flanks', 'Thighs'].map((site) => (
                                <button
                                    key={site}
                                    className={`${styles['site-button']} ${selectedSite === site ? styles['selectedSite'] : ''}`}
                                    onClick={() => {
                                        if(selectedSite === site){
                                            setSelectedSite(null);
                                        }
                                        else {
                                            setSelectedSite(site);
                                        }
                                    }}
                                >
                                    {site}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles['next-button-container']}>
                    <button className="next-button">
                    Next
                    </button>
                </div>

            </div>
        </div>
    );
}