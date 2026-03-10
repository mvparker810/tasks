import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        setReveal(!reveal);
                    }}
                >
                    Reveal Answer
                </Button>
            </span>
            <div>{reveal && "42"}</div>
        </div>
    );
}
