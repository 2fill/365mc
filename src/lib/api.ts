export type InputData = {
    Sex: number;
    Age: number;
    "Liposuction type"?: number;
    "Liposuction site"?: number;
    Size?: number;
    "Fat volume"?: number;
    Edema?: number;
    Height?: number;
    Weight?: number;
    BMI?: number;
    SMM?: number;
    BFM?: number;
    TBW?: number;
    FFM?: number;
    "Body protein"?: number;
    "Body mineral"?: number;
    WHR?: number;
};

export async function getPrediction(inputData: InputData): Promise<number> {
    const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
    });

    if (!res.ok) {
        throw new Error("Flask API 호출 실패");
    }

    const data = await res.json();
    return data.prediction;
}
