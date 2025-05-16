import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  document.body.className = dark ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <a className="navbar-brand" href="#">SoftSell</a>
        <button className="btn btn-outline-primary" onClick={() => setDark(!dark)}>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
