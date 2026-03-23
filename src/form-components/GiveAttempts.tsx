import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function handleGain() {
        const parsed = parseInt(requested);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    return (
        <div>
            <p>Give Attempts</p>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requested}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setRequested(e.target.value); }}
            />
            <button onClick={() => { setAttemptsLeft(attemptsLeft - 1); }} disabled={attemptsLeft === 0}>
                use
            </button>
            <button onClick={handleGain}>gain</button>
        </div>
    );
}
