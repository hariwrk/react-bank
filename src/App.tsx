import React, { useState } from 'react';
import Credit from './Components/Credit';
import Debit from './Components/Debit';
import Transaction from './Components/Transaction';

const App: React.FC = () => {
    const [total, setTotal] = useState<number>(0);
    const [creditValue, setCreditValue] = useState<number>(0);
    const [debitValue, setDebitValue] = useState<number>(0);
    const [transactions, setTransactions] = useState<string[]>([]);

    const handleCreditChange = (change: number) => {
        setCreditValue(change);
    };

    const handleDebitChange = (change: number) => {
        setDebitValue(change);
    };

    const updateTotal = () => {
        const newTotal = total + creditValue - debitValue;
        setTotal(newTotal);

        if (creditValue > 0) {
            setTransactions(prev => [...prev, `Credit: ${creditValue}`]);
        }
        if (debitValue > 0) {
            setTransactions(prev => [...prev, `Debit: ${debitValue}`]);
        }

        // Reset
        setCreditValue(0);
        setDebitValue(0);
    };

    return (
        <div className="App">
            <div>
                <h1>Total: {total}</h1>
            </div>
            <div className="Parent">
            <div className='debcred'>
                <h2>Credit</h2>
                <Credit onTotalChange={handleCreditChange} />
                <br />
                <h2>Debit</h2>
                <Debit onTotalChange={handleDebitChange} />
                <br />
                <button onClick={updateTotal}>Update Total</button>
            </div>
            <div className='transac'>
                <h3>Transaction History</h3>
                <Transaction transactions={transactions} />
            </div>
            </div>
        </div>
    );
};

export default App;
