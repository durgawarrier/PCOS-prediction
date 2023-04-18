import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // call your backend API to book the appointment with the provided data
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter appointment date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" placeholder="Enter appointment time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit">Book Appointment</Button>
    </Form>
  );
};

export default BookingForm;
