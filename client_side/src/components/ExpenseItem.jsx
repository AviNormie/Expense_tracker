// src/components/ExpenseItem.jsx
function ExpenseItem({ expense }) {
    return (
        <div className="expense-item">
            <h3>{expense.description}</h3>
            <p>Amount: ${expense.amount}</p>
            <p>Category: {expense.category}</p>
            <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
        </div>
    );
}

export default ExpenseItem;
