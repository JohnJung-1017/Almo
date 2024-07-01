import React, {useState} from 'react';
import '../css/dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='dropdown'>
        <button onClick={toggleDropdown} className='dropdown_toggle'>
            <div className='flag'></div>한국어
        </button>
        {isOpen && (
          <ul className={`dropdown_menu ${isOpen ? 'show' : ''}`}>
            <li className='dropdown_item'>한국어</li>
            <li className='dropdown_item'>English</li>
          </ul>
        )}
    </div>
  );
};

export default Dropdown;