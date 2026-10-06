import React from 'react';
import ServiceCard from '../components/ServiceCard';

// Data for the services shown on this page.
// Each item is passed to a ServiceCard component as props.
const services = [
  {
    name: 'Collision Repair',
    description: 'Repair of vehicle damage after a collision.',
    details: 'Book an appointment and tell us about the damage to your vehicle.',
  },
  {
    name: 'Auto Repair',
    description: 'General repair work for your vehicle.',
    details: 'Book an appointment and tell us what problem your vehicle has.',
  },
];

// Services page: creates one ServiceCard for each item in the services list
export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          name={service.name}
          description={service.description}
          details={service.details}
        />
      ))}
    </div>
  );
}