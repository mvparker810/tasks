import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <p>Edit Mode</p>
            <Form.Switch
                label="Edit Mode"
                checked={editMode}
                onChange={() => { setEditMode(!editMode); }}
            />
            {editMode ? (
                <div>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }}
                    />
                    <Form.Check
                        id="is-student"
                        type="checkbox"
                        label="Is a student?"
                        checked={isStudent}
                        onChange={() => { setIsStudent(!isStudent); }}
                    />
                </div>
            ) : (
                <p>{name} is {isStudent ? "" : "not "}a student.</p>
            )}
        </div>
    );
}
