
 import React from 'react';
import { render, fireEvent, getByPlaceholderText, getAllByLabelText, getByLabelText } from '@testing-library/react';


import Welcome from './Welcome';



test('render Profile component', () =>{
   
  const {getByText,getByPlaceholderText,getByLabelText,getByRole} = render(< Welcome/>);
  
  
  const login=getByText('login');
  const register=getByText('Register');
  const getstared=getByText('Get Started');


});