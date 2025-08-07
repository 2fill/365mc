"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from './result.module.css';

type PredictionResult = {
    postoperativeWeight: number;
    postoperativeSize: number;
};

export default function Page() {
    const router = useRouter();
    const [result, setResult] = useState<PredictionResult | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            try {
                const inputDataString = localStorage.getItem("inputData");
                if (!inputDataString) {
                    setError("No input data found.");
                    setLoading(false);
                    return;
                }
    
                const inputData = JSON.parse(inputDataString);
    
                // 백엔드 API 주소
                const res = await fetch("http://localhost:5000/predict", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inputData),
                });
    
                if (!res.ok) {
                    throw new Error("Prediction API 호출 실패");
                }
        
                const data = await res.json();
        
                setResult({
                    postoperativeWeight: data.postoperativeWeight,
                    postoperativeSize: data.postoperativeSize,
                    });
            }
            catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("오류 발생");
                }
            }
            finally {
                setLoading(false);
            }
        };
    
        fetchPrediction();
    }, []);
    
    if (loading) {
        return <div className={styles.main}>Loading...</div>;
    }
    
    if (error) {
        return (
            <div className={styles.main}>
                <p>Error: {error}</p>
                <button onClick={() => router.push("/")}>Back to Start</button>
            </div>
        );
    }

    return (
        <div className={styles.main}>
            <div className={styles['main-box']}>
                <img
                    src="/Check.png"
                    alt="Check Icon"
                    className={styles['check-icon']}
                />
                <h1 className={styles.completeText}>COMPLETE</h1>

                    <div className={styles['result-box']}>
                        <div className={styles['weight-box']}>
                            <span className={styles['result-label']}>Postoperative weight</span>
                            <label className={styles['result-value']}>
                                {result?.postoperativeWeight ?? "-"}
                            </label>
                        </div>
                        <div className={styles['size-box']}>
                            <span className={styles['result-label']}>Postoperative size</span>
                            <label className={styles['result-value']}>
                                {result?.postoperativeSize ?? "-"}
                            </label>
                        </div>
                    </div>



                <div className={styles['page-button-container']}>
                    <button
                        className={styles['back-button']}
                        onClick={() => router.push('/')}>
                        Back to Start
                    </button>
                </div>

                <img
                    src="/Jibang-2.png"
                    alt="Jibang2"
                    className={styles['Jibang-img-2']}
                />
            </div>
        </div>
    );
}