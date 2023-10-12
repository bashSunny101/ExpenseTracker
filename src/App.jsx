import React, { useState } from "react";

 function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = () => {
    if (description && amount && date) {
      const newExpense = {
        id: expenses.length + 1,
        description,
        amount: parseFloat(amount),
        date,
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
      setDate("");
    }
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">Expense Tracker</h1>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Add Expense</h2>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={addExpense}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Add Expense
          </button>
        </div>

        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Expense List</h2>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id} className="mb-2 text-blue-700">
                <strong>{expense.description}</strong> - ${expense.amount} on {expense.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2 text-blue-900">Total Expenses:</h2>
          <p className="text-2xl font-semibold text-blue-700">${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
