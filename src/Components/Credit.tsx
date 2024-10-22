import React, { useState } from "react";

interface CreditProps {
    onTotalChange: (newTotal: number) => void;
}

const Credit: React.FC<CreditProps> = ({ onTotalChange }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onTotalChange(newValue);
    };

    return (
        <input
            type="number"
            name="credit"
            value={value}
            onChange={handleChange}
        />
    );
};

export default Credit;
