import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addExpense } from '../slices/expenseSlice';

function AddExpense() {
  const [track, setTrack] = useState({
    item: '',
    date: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value
    });
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   // For example, dispatch an action to store the expense data
  //   console.log(track);
  //   // Reset the form
  //   setTrack({
  //     item: '',
  //     date: '',
  //     amount: '',
  //     category: ''
  //   });
  // }


  const dispatch =useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(track);
    dispatch(addExpense(track));
    
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Item paid for"
            name="item"
            value={track.item}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date purchased</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={track.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount Paid</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter amount"
            name="amount"
            value={track.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category of Expense</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="category"
            value={track.category}
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
    </div>
  );
}

export default AddExpense;



