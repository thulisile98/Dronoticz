import React from 'react';
import ToggleMenu from './ToggleMenu';

const Header = () => {
  return (
    < header className="Image1">
      <div className="hero">
        <div className="contain-one">
          <ToggleMenu />
          <h1>DRONOTICZ</h1>
          <h2>
            THE ERA OF DRONES
            <hr />
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;

