// src/components/ui/input.jsx
import React from 'react';

const Input = ({ className, ...props }) => (
  <input className={`border p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`} {...props} />
);

export default Input;
