import React from 'react';

// Welcome component: shows the garage name and the welcome message on the home page
function Welcome() {
  return (
    <div>
      <h1>Dila Auto Repair & Collision</h1>
      <p>
        Welcome to Dila Auto Repair & Collision. From routine repairs to
        collision work, we will get you back on the road safely.
      </p>
    </div>
  );
}

// Home page: uses the Welcome component
export default function Home() {
  return (
    <div>
      <Welcome />
    </div>
  );
}