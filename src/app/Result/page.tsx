"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './result.module.css';

export default function Page() {
    const router = useRouter();

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
                            <label className={styles['result-value']}>65</label>
                        </div>
                        <div className={styles['size-box']}>
                            <span className={styles['result-label']}>Postoperative size</span>
                            <label className={styles['result-value']}>90</label>
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