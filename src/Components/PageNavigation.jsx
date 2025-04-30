import React from 'react';
import { NavLink } from 'react-router-dom';

export const PageNavigation = ({ title }) => {
  return (
    <div className="breadcrumb">
      <NavLink to="/" className="text-gray-500 hover:text-gray-700">
        Home
      </NavLink>
      <span> / </span>
      <span className="font-semibold">{title}</span>
    </div>
  );
};
