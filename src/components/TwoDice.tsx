import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [a, set_A] = useState<number>(1);
    const [b, set_B] = useState<number>(2);

    return (
        <div>
            <div>
                <span data-testid="left-die">{a}</span>
                <span> - </span>
                <span data-testid="right-die">{b}</span>
            </div>

            <div>
                <Button
                    onClick={() => {
                        set_A(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        set_B(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>
                {a == b && a != 1 && "Win"}
                {a == b && a == 1 && "Lose"}
            </div>
        </div>
    );
}
