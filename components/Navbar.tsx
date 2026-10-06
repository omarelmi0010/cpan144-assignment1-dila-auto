import React, { useState } from 'react';
import Link from 'next/link';

// Props type: the garage name is passed in from the parent
type NavbarProps = {
  garageName: string;
};

// Navbar component: shows the garage name and a menu with links to each page
export default function Navbar({ garageName }: NavbarProps) {
  // State: remembers whether the menu links are visible
  const [menuOpen, setMenuOpen] = useState(true);

  // Event handler: shows or hides the menu when the button is clicked
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <h2>{garageName}</h2>
      <button onClick={handleToggle}>
        {menuOpen ? 'Hide Menu' : 'Show Menu'}
      </button>
      {/* Conditional rendering: the links only appear when menuOpen is true */}
      {menuOpen && (
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/appointment">Appointment</Link></li>
        </ul>
      )}
    </nav>
  );
}