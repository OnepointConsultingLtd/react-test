export type VectorFormData = {
    dimension: number;
    setDimension: (dimension: number) => void;
    min: number;
    setMin: (min: number) => void;
    max: number;
    setMax: (max: number) => void;
    vectors: number[][];
    setVectors: (vectors: number[][]) => void;
}