import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteExpense } from '../slices/expenseSlice';
import ExpenseEdit from './ExpenseEdit';

function ExpenseCard() {
  const state = useSelector((state) => {
    return state.expenseReducer;
  });

    const dispatch = useDispatch();
    
    function deleteExpenseList(id) {
        dispatch(deleteExpense(id))
      }//// delete function
    




    const [show, setShow] = useState(false);
    const [preFill, setPreFill] = useState(null);

    const handleClose = () => setShow(false);
    
    const handleShow = (expense) => {
        setPreFill(expense);
       setShow(true);
     };
    
  return (
    <div>
      <>
        {state.expenses.map((expense, index) => (
          <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Body>
              <Card.Title>Expense</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Expense List</Card.Subtitle>
              <Card.Text>
                <p>Item: {expense.item}</p>
                <p>Date: {expense.date}</p>
                <p>Amount: {expense.amount}</p>
                <p>Category: {expense.category}</p>
              </Card.Text>
              <Button variant="primary"  onClick={()=>handleShow(expense)}>Edit</Button>
              <Button variant="danger" onClick = {()=> deleteExpenseList(expense.id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>edit my expense</Modal.Title>
          </Modal.Header>
                  <Modal.Body>
                  <ExpenseEdit prefill={preFill} closeModal={handleClose} />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default ExpenseCard;
































