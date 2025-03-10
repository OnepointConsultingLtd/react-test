import { useVectorFormContext } from "../context/VectorFormContext";
import VectorDisplay from "./VectorDisplay";

export default function VectorForm() {
    const { dimension, setDimension, min, setMin, max, setMax, vectors, setVectors } = useVectorFormContext();

    const handleGenerateVector = () => {
        const vector = Array.from({ length: dimension }, () => Math.random() * (max - min + 1) + min);
        setVectors([...vectors, vector]);
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    Vector Configuration
                </h1>
                
                <div className="mb-4">
                    <label htmlFor="dimension" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dimension: {dimension}
                    </label>
                    <input
                        type="range"
                        id="dimension"
                        min="2"
                        max="50"
                        value={dimension}
                        onChange={(e) => setDimension(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="min" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Min Value: {min}
                    </label>
                    <input
                        type="number"
                        id="min"
                        value={min}
                        onChange={(e) => setMin(parseFloat(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="max" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Max Value: {max}
                    </label>
                    <input
                        type="number"
                        id="max"
                        value={max}
                        onChange={(e) => setMax(parseFloat(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>
                
                <button
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    onClick={handleGenerateVector}
                >
                    Generate Vector
                </button>
            </div>
            <VectorDisplay />
        </div>
    );
}
