import { createContext, useContext, useState } from "react";
import { VectorFormData } from "../types/vector";

export const VectorFormContext = createContext<VectorFormData>({
    dimension: 0,
    setDimension: () => {},
    min: 0,
    setMin: () => {},
    max: 0,
    setMax: () => {},
    vectors: [],
    setVectors: () => {},
})

export function useVectorFormContext() {
    const context = useContext(VectorFormContext);
    if (!context) {
        throw new Error('useVectorFormContext must be used within a VectorFormContext');
    }
    return context;
}

export function VectorFormProvider({ children }: { children: React.ReactNode }) {
    const [vectors, setVectors] = useState<number[][]>([]);
    const [dimension, setDimension] = useState(5);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1);
    
    return (
        <VectorFormContext.Provider value={{ 
            dimension, 
            setDimension, 
            min, 
            setMin, 
            max, 
            setMax,
            vectors, 
            setVectors 
        }}>
            {children}
        </VectorFormContext.Provider>
    );
}

