function Total({expenses})
{
	return(
	<div>
		<h2>Total: </h2>
		<p>{expenses.reduce((total,expense)=> total + expense.amount,0)}</p>
	</div>
	)
}
export default Total