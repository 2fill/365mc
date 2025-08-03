"use client";

import { useState, useEffect } from "react";
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
    const [weight, setWeight] = useState<number | null>(null);
    const [bmi, setBmi] = useState<number | null>(null);
    const [smm, setSMM] = useState<number | null>(null);
    const [bfm, setBFM] = useState<number | null>(null);
    const [tbw, setTBW] = useState<number | null>(null);
    const [ffm, setFFM] = useState<number | null>(null);
    const [protein, setProtein] = useState<number | null>(null);
    const [mineral, setMineral] = useState<number | null>(null);
    const [whr, setWHR] = useState<number | null>(null);

    useEffect(() => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(parseFloat(calculatedBmi.toFixed(1)));
        } else {
            
        }
    }, [height, weight]);

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

                        {/* Weight */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Weight</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${weight !== null && weight !== 0 ? styles.focused : ''}`}
                                    value={weight !== null ? weight.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setWeight(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(weight === null) setWeight(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setWeight(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setWeight(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* BMI */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>BMI</div>
                            <div className={styles['input-controls']}>
                            <input
                                type="text"
                                className={styles['input-textBox']}
                                value={bmi !== null ? bmi.toString() : ''}
                                readOnly
                            />
                            </div>
                        </div>
                    </div>
                    
                    {/* 구분선 */}
                    <div className={styles.divider}></div>





                    <div className={styles['second-container']}>

                        {/* SMM */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Skeletal muscle mass</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${smm !== null && smm !== 0 ? styles.focused : ''}`}
                                    value={smm !== null ? smm.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setSMM(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(smm === null) setSMM(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setSMM(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setSMM(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* BFM */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Body fat mass</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${bfm !== null && bfm !== 0 ? styles.focused : ''}`}
                                    value={bfm !== null ? bfm.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setBFM(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(bfm === null) setBFM(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setBFM(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setBFM(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* TBW */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Total body water</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${tbw !== null && tbw !== 0 ? styles.focused : ''}`}
                                    value={tbw !== null ? tbw.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setTBW(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(tbw === null) setTBW(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setTBW(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setTBW(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>
                    </div>
                    {/* 구분선 */}
                    <div className={styles.divider}></div>





                    <div className={styles['third-container']}>

                        {/* FFM */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Fat-free mass</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${ffm !== null && ffm !== 0 ? styles.focused : ''}`}
                                    value={ffm !== null ? ffm.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setFFM(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(ffm === null) setFFM(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setFFM(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setFFM(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* Body protein */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Body protein</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${protein !== null && protein !== 0 ? styles.focused : ''}`}
                                    value={protein !== null ? protein.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setProtein(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(protein === null) setProtein(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setProtein(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setProtein(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>

                        {/* Body mineral */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Body mineral</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${mineral !== null && mineral !== 0 ? styles.focused : ''}`}
                                    value={mineral !== null ? mineral.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setMineral(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(mineral === null) setMineral(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setMineral(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setMineral(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <div className={styles.divider}></div>





                    <div className={styles['fourth-container']}>

                        {/* WHR */}
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Waist-hip ratio</div>
                            <div className={styles['input-controls']}>
                                <input
                                    type="number"
                                    className={`${styles['input-textBox']} ${whr !== null && whr !== 0 ? styles.focused : ''}`}
                                    value={whr !== null ? whr.toString() : ""}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        if(value.length > 3) value = value.slice(0, 3);
                                        if(value.startsWith("0")) value = value.replace(/^0+/, "");
                                        const num = parseInt(value);
                                        setWHR(isNaN(num) ? null : num);
                                    }}
                                    onFocus={() => {
                                        if(whr === null) setWHR(0);
                                    }}
                                />
                                <button className={styles['plus-button']} onClick={() => setWHR(prev => (prev ?? 0) + 1)}>+</button>
                                <button className={styles['minus-button']} onClick={() => setWHR(prev => (prev ?? 0) > 0 ? (prev ?? 0) - 1 : 0)}>-</button>
                            </div>
                        </div>
                    </div>
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