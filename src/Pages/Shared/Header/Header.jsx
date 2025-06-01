import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='text-center'>
      <img className='mx-auto mb-5' src={logo} alt="missing img" />
      <p className='mb-2.5'>Journalism Without Fear or Favour</p>
      <span>{currentTime.format('dddd, MMMM D, YYYY, h:mm:ss a')}</span>
    </div>
  );
};

export default Header;
