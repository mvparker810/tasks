import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, set_attempts] = useState<number>(4);
    const [active, set_active] = useState<boolean>(false);

    return (
        <div>
            Start Attempt. You have {attempts} attempts
            <span>
                <Button
                    onClick={() => {
                        set_attempts(attempts + 1);
                    }}
                    disabled={active}
                >
                    Mulligan
                </Button>
            </span>
            <div>
                <span>
                    <Button
                        onClick={() => {
                            set_attempts(attempts - 1);
                            set_active(true);
                        }}
                        disabled={active || attempts <= 0}
                    >
                        Start Quiz
                    </Button>
                    <Button
                        onClick={() => {
                            set_active(false);
                        }}
                        disabled={!active}
                    >
                        Stop Quiz
                    </Button>
                </span>
            </div>
        </div>
    );
}
