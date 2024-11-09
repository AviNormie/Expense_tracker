// src/App.jsx
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default App;
