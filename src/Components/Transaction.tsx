import React from "react";

interface TransactionProps {
    transactions: string[];
}

const Transaction: React.FC<TransactionProps> = ({ transactions }) => {
    return (
        <div>
            <h1>Transaction History</h1>
            <ul>
                {transactions.length === 0 ? (
                    <li>No transactions yet.</li>
                ) : (
                    transactions.map((transaction, index) => (
                        <li key={index}>{transaction}</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Transaction;
