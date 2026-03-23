import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <p>Check Answer</p>
            <Form.Control
                type="text"
                value={answer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAnswer(e.target.value); }}
            />
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
