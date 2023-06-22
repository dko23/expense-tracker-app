import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editExpense } from '../slices/expenseSlice';
import { useState } from 'react';

function ExpenseEdit({prefill, closeModal}) {
    const [money, setMoney] = useState({
        id: prefill.id,
        item: prefill.item,
        date: prefill.date,
      amount: prefill.amount,
        category:prefill.category
      });
    
  
  
  
  
  
  
  
      const dispatch = useDispatch();
      
      const handleChange = (e) => {
        e.preventDefault()
        setMoney({ ...money, [e.target.name]: e.target.value });
      };
    
      const handleEditChange = (e) => {
        e.preventDefault()
        console.log(money)
        dispatch(editExpense(money));
        closeModal();
      };
    




  return (
      <div>
          <>
          
          <Form onSubmit={handleEditChange}>
        <Form.Group className="mb-3">
          <Form.Label>Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Item paid for"
            name="item"
            value={money.item}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date purchased</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={money.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount Paid</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter amount"
            name="amount"
            value={money.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category of Expense</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="category"
            value={money.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="Food & Drink">Food & Drink</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transport">Transport</option>
            <option value="Housing & Rent">Housing & Rent</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          
          
          
          </>
    </div>
  )
}

export default ExpenseEdit