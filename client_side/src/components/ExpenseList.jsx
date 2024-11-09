// src/components/ExpenseList.jsx
import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import axios from "axios";

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/expenses`);
        setExpenses(response.data);
    };

    return (
        <div>
            {expenses.map((expense) => (
                <ExpenseItem key={expense._id} expense={expense} />
            ))}
        </div>
    );
}

export default ExpenseList;
