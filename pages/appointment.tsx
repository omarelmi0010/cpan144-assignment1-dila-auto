import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

// Appointment page: shows the AppointmentForm component
// The garage name is passed to the form as a prop
export default function Appointment() {
  return (
    <div>
      <h1>Appointments</h1>
      <AppointmentForm garageName="Dila Auto Repair & Collision" />
    </div>
  );
}