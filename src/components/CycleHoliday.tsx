import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "new_years"
    | "valentines"
    | "stpattys"
    | "thanksgiving"
    | "christmas";

const alphabet: Record<Holiday, Holiday> = {
    christmas: "new_years",
    new_years: "stpattys",
    stpattys: "thanksgiving",
    thanksgiving: "valentines",
    valentines: "christmas",
};

const chrono: Record<Holiday, Holiday> = {
    new_years: "valentines",
    valentines: "stpattys",
    stpattys: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "new_years",
};

const silly_freaking_emoticon: Record<Holiday, string> = {
    new_years: "🎆",
    valentines: "💘",
    stpattys: "🍀",
    thanksgiving: "🦃",
    christmas: "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, _setholiday] = useState<Holiday>("new_years");
    return (
        <div>
            <div>Holiday: {silly_freaking_emoticon[holiday]}</div>
            <div>
                <Button
                    onClick={() => {
                        _setholiday(alphabet[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        _setholiday(chrono[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
