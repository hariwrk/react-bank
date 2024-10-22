import React, { useState } from "react";

interface DebitProps {
    onTotalChange: (newTotal: number) => void;
}

const Debit: React.FC<DebitProps> = ({ onTotalChange }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onTotalChange(newValue); 
    };

    return (
        <input
            type="number"
            name="debit"
            value={value}
            onChange={handleChange}
        />
    );
};

export default Debit;
