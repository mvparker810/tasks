import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, set_qType] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        set_qType(
                            qType == "short_answer_question" ?
                                "multiple_choice_question"
                            :   "short_answer_question",
                        );
                    }}
                >
                    Change Type
                </Button>
            </span>
            <div>
                {qType == "multiple_choice_question" && "Multiple Choice"}
                {qType == "short_answer_question" && "Short Answer"}
            </div>
        </div>
    );
}
