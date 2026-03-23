import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <p>Double Half</p>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
