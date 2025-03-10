import { useVectorFormContext } from "../context/VectorFormContext";

export default function VectorDisplay() {
    const { vectors } = useVectorFormContext();
    return (
        <div>
            <h1>Vector Display</h1>
            {vectors.map((vector, index) => (
                <div key={index}>
                    <p>{vector.join(", ")}</p>
                </div>
            ))}
        </div>
    )
}
