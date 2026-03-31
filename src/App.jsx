import Header from './components/Header.jsx'
import AddExpense from './components/AddExpense.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import Total from './components/Total.jsx'
import { useState } from 'react';
import './App.css'
function App(){
  const [expenses, setExpenses] = useState([])
  function deleteExpense(delId)
  {
    setExpenses(expenses.filter(n => n.id ===! delId));
  }
  return (
    <div className="app-container">
    <Header />
    <AddExpense setExpenses={setExpenses} />
    <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
    <Total expenses = {expenses} />
    </div>
  )
}
export default App