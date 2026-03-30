function ExpenseList({expenses}){
	return(
		<div>
			<h2>Expenses</h2>
			{expenses.map((expense)=>(
				<div key={expense.id}>
					<span>{expense.name}</span>
					<span>{expense.amount}</span>
				</div>
				))}
		</div>
	)
}
export default ExpenseList
