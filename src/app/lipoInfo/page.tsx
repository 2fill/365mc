"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './lipoInfo.module.css';

const edemaOptions = [
    { label: 'No edema', className: 'edema-button-1' },
    { label: 'Mild edema', className: 'edema-button-2' },
    { label: 'Moderate to severe edema', className: 'edema-button-3' },
] as const;
type EdemaType = typeof edemaOptions[number]['label'] | null;

export default function Page() {
    const router = useRouter();

    const [selectedType, setSelectedType] = useState<"Lams" | "Surgery" | null>(null);
    const [selectedSite, setSelectedSite] = useState<string | null>(null);
    const [selectedEdema, setSelectedEdema] = useState<EdemaType>(null);

    const handleClick = (gender: "Lams" | "Surgery") => {
        if(selectedType === gender){
            setSelectedType(null);
        }
        else {
            setSelectedType(gender);
        }
    };

    const [preopSize, setPreopSize] = useState<number | null>(null);
    const [fatVolume, setFatVolume] = useState<number | null>(null);

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

                    {/* Liposuction type */}
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

                    {/* Liposuction site */}
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
                    
                    {/* 구분선 */}
                    <div className={styles.divider}></div>

                    <div className={styles['textbox-container']}>

                        {/* Preoperative Size */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Preoperative size</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${preopSize !== null && preopSize !== 0 ? styles.focused : ''}`}
                                    value={preopSize !== null ? preopSize.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setPreopSize(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(preopSize === null) setPreopSize(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setPreopSize(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setPreopSize(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* Fat Volume */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Fat volume</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${fatVolume !== null && fatVolume !== 0 ? styles.focused : ''}`}
                                    value={fatVolume !== null ? fatVolume.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setFatVolume(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(fatVolume === null) setFatVolume(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setFatVolume(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setFatVolume(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <div className={styles.divider}></div>

                    {/* Edema */}
                    <div className={styles['edema-box']}>
                        <div className={styles['edema-label']}>Edema</div>
                        <div className={styles['edema-button']}>
                            {edemaOptions.map(({label, className}) => (
                                <button
                                    key={label}
                                    className={`${styles[className]} ${selectedEdema === label ? styles['selectedEdema'] : ''}`}
                                    onClick={() => {
                                        setSelectedEdema(selectedEdema === label ? null : label);
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles['next-button-container']}>
                    <button className={styles['next-button']}>
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}