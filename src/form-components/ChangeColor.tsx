import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <p>Change Color</p>
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={() => {
                        setColor(c);
                    }}
                    style={{ backgroundColor: c }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    display: "inline-block",
                    padding: "4px 8px",
                }}
            >
                You have chosen{" "}
                <span style={{ fontWeight: "bold" }}>{color}</span>.
            </div>
        </div>
    );
}
