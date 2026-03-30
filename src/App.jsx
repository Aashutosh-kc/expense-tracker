import Header from './components/Header.jsx'
import AddExpense from './components/AddExpense.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import Total from './components/Total.jsx'
import { useState } from 'react';
function App(){
  const [expenses, setExpenses] = useState([])

  return (
    <div>
    <Header />
    <AddExpense setExpenses={setExpenses} />
    <ExpenseList expenses={expenses} />
    <Total expenses = {expenses} />
    </div>
  )
}
export default App