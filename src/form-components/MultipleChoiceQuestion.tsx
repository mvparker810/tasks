import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div>
            <p>Multiple Choice Question</p>
            <Form.Select
                value={selected}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSelected(e.target.value); }}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </Form.Select>
            {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
