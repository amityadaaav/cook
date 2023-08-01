import React from 'react';
import { render, fireEvent, getByPlaceholderText, getAllByLabelText, getByLabelText, getByTestId, findByText,screen,getByText, findByRole, getAllByRole } from '@testing-library/react';



import Recipe from './Recipe';


  
  test('render Register component', async() =>{
   
   const {getByText,getByPlaceholderText,getByRole} = render(<Recipe />);
   const searchbar=getByPlaceholderText("Search recipe here.....");
   const dropdown=getByPlaceholderText("foodpref");
   const option=getByRole("combobox");
   const display=dropdown.children[0];
   expect(display.textContent).toBe(option[0].text);
   fireEvent.click(dropdown);
   const dropdownOptions=getAllByRole(dropdown,'option')
   fireEvent.click(dropdownOptions[0]);
   expect(display.textContent).toBe(option[0].text);
   
      
   expect(searchbar).toBeInTheDocument();
   expect(dropdown).toBeInTheDocument();
   expect(option).toBeInTheDocument();
   
   


 });