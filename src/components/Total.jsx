import './Total.css'
function Total({expenses})
{
	return(
	<div className=" total">
		<h2>Total: </h2>
		<span>{expenses.reduce((total,expense)=> total + expense.amount,0)}</span>
	</div>
	)
}
export default Total