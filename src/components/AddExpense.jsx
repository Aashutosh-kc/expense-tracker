import { useState} from 'react';
import './AddExpense.css'
function AddExpense({setExpenses}){
	const[name , setName] = useState('');
	const[amount , setAmount] = useState('');

	function handleSubmit(){
		if(name == '' || name == '') return;
		const newExpense={
			id: Date.now(),
			name: name,
			amount: Number(amount)
		}
		setExpenses((prev) => [...prev, newExpense])
		setName('')
		setAmount('')
	}

	return(
	<div className="add-expense">
	<h2>Add Expense</h2>
	<input type="text" 
	placeholder="Expense name" 
	value={name} 
	onChange={(e)=>setName(e.target.value)} />
	<input type="number" 
	placeholder="Amount" 
	value={amount} 
	onChange={(e)=>setAmount(e.target.value)} />
	<button onClick={handleSubmit}>Add</button>
	</div>
	)
}
export default AddExpense