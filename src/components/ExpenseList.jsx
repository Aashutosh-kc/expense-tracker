function ExpenseList({expenses,deleteExpense}){
	return(
		<div>
			<h2>Expenses</h2>
			{expenses.map((expense)=>(
				<div key={expense.id}>
					<span>{expense.name}</span>
					<span>{expense.amount}</span>
					<button onClick={() => deleteExpense(expense.id)}>Delete</button>
				</div>
				))}
		</div>
	)
}
export default ExpenseList
