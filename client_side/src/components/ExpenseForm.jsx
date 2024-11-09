// src/components/ExpenseForm.jsx
import { useState } from "react";
import axios from "axios";

function ExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
        description: "", amount: "", category: "", date: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`mongodb://localhost:27017`, formData);
        onAddExpense(); // Refresh expenses list
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="category" />
            {/* Input fields for description, amount, category, date */}
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
