import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActionButton = ({ label, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }
  return <button onClick={handleClick}>{label}</button>;
};

export default QuickActionButton;
