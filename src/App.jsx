import AddExpense from './components/AddExpense';
import ExpenseCard from './components/ExpenseCard';

import './App.css'

function App() {


  return (
    <>
      <div className='container'>
<div className="row">
  <div className='col-md-4'>
  <AddExpense/>
  </div>
  <div className="col-md-8">
   <ExpenseCard/>
  </div>
</div>

</div>
    </>
  )
}

export default App
