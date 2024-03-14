import React, { useEffect } from 'react';
import "./Progressbar.css";

export default function Progressbar(props) {
    const number = Number(props.Progress_Number);
    const [filled, setFilled] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);

    useEffect(() => {
        setIsRunning(true); // Start the progress when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once on mount

    useEffect(() => {
        if (filled < number && isRunning) {
            const timerId = setTimeout(() => {
                setFilled(prev => prev + 2);
            }, 20);

            return () => clearTimeout(timerId); // Cleanup function to clear timeout
        }
    }, [filled, isRunning, number]);

    return (
        <>
            <div>
                <div className="progressbar">
                    <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#48CAE4",
                        transition: "width 0.2s"
                    }}></div>
                </div>
            </div>
        </>
    );
}
