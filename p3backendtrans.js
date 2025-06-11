import React, { useState } from 'react';
import axios from 'axios';

function AddTransaction({ onAdd }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/transactions', formData);
    onAdd(res.data);
    setFormData({ type: 'expense', amount: '', category: '', description: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <select name="type" value={formData.type} onChange={handleChange} className="w-full">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" className="w-full" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full" />
      <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default AddTransaction;