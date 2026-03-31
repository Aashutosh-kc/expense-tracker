import './ExpenseList.css'
function ExpenseList({expenses,deleteExpense}){
	return(
		<div className="expense-list">
			<h2>Expenses</h2>
			{expenses.map((expense)=>(
				<div className="expense-item" key={expense.id}>
					<span>{expense.name}</span>
					<span>{expense.amount}</span>
					<button onClick={() => deleteExpense(expense.id)}>Delete</button>
				</div>
				))}
		</div>
	)
}
export default ExpenseList
