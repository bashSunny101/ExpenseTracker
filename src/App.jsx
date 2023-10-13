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
    <div className="animated-background h-screen">
      <nav className="bg-gradient-to-l from-purple-500 to-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300">Home</a>
            <a href="#" className="text-white hover:text-blue-300">About</a>
            <a href="#" className="text-white hover:text-blue-300">Contact</a>
          </div>
          <button className="md:hidden text-white">
            {/* You can use a mobile menu icon here */}
            &#9776;
          </button>
        </div>
      </nav>
      <div className="container mx-auto py-8">
        <div className="bg-white rounded p-8 shadow-md md:w-96 mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Add an Expense</h1>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4"
            />
            <button
              onClick={addExpense}
              className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-700 focus:outline-none transition-all duration-300"
            >
              Add Expense
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Expense List</h2>
            <ul>
              {expenses.map((expense) => (
                <li
                  key={expense.id}
                  className="mb-2 transition-all duration-300"
                >
                  <strong>{expense.description}</strong> - ${expense.amount} on {expense.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-600">Total Expenses:</h2>
            <p className="text-2xl font-semibold">${calculateTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
