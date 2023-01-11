import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const [e1, e2, e3, e4] = props.data;

  return (
    <div>
      <ExpenseItem title={e1.title} amount={e1.amount} date={e1.date} />
      <ExpenseItem title={e2.title} amount={e2.amount} date={e2.date} />
      <ExpenseItem title={e3.title} amount={e3.amount} date={e3.date} />
      <ExpenseItem title={e4.title} amount={e4.amount} date={e4.date} />
    </div>
  );
}

export default Expenses;
