import React, { useState } from 'react';

// Props type: the garage name is passed in from the parent page
type AppointmentFormProps = {
  garageName: string;
};

// AppointmentForm component: a simple form to request an appointment
export default function AppointmentForm({ garageName }: AppointmentFormProps) {
  // State: one value for each input, plus whether the form was submitted
  const [customerName, setCustomerName] = useState('');
  const [issue, setIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Event handler: runs when the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the browser from reloading the page
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Request an Appointment at {garageName}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerName">Your name: </label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <br />
        <label htmlFor="issue">Describe the problem: </label>
        <input
          id="issue"
          type="text"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the problem"
          required
        />
        <br />
        <button type="submit">Request Appointment</button>
      </form>
      {/* Conditional rendering: the message only appears after the form is submitted */}
      {submitted && <p>Thank you, {customerName}! Your request has been noted.</p>}
    </div>
  );
}