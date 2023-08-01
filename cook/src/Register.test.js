 import React from 'react';
import { render, fireEvent, getByPlaceholderText, getAllByLabelText, getByLabelText, getByTestId, findByText,screen } from '@testing-library/react';
import Register from './Register';

import userEvent from '@testing-library/user-event';
window.alert=jest.fn();


  
  test('render Register component', () =>{
   
   const {getByText,getByPlaceholderText,waitFor} = render(<Register />);
   const name=getByPlaceholderText("Enter Full Name");
   const photo=getByPlaceholderText("Upload Photo");
   const email=getByPlaceholderText("Enter email Address");
   const mobile=getByPlaceholderText("Enter Phone Number");
   const age=getByPlaceholderText("Enter Age")
   const password = getByPlaceholderText('Enter Password');
   const confirmPassword = getByPlaceholderText('Re Enter Password');
   const food=getByText("Food Pref:");
   const submitButton = getByText('Register');
   expect(name).toBeInTheDocument();
   expect(photo).toBeInTheDocument();
   expect(email).toBeInTheDocument();
   expect(password).toBeInTheDocument();
   expect(age).toBeInTheDocument();
   expect(confirmPassword).toBeInTheDocument();
   expect(food).toBeInTheDocument();
   expect(submitButton).toBeInTheDocument();


 });
  
test('for valid data',async() => {
  
  const {getByText,getByPlaceholderText,waitFor} = render(<Register />);
   const name=getByPlaceholderText("Enter Full Name");
   const photo=getByPlaceholderText("Upload Photo");
   const email=getByPlaceholderText("Enter email Address");
   const mobile=getByPlaceholderText("Enter Phone Number");
   const age=getByPlaceholderText("Enter Age")
   const password = getByPlaceholderText('Enter Password');
   const confirmPassword = getByPlaceholderText('Re Enter Password');
   const food=getByText("Food Pref:");
   const submitButton = getByText('Register');
   
 

  fireEvent.change(name, { target: { value: 'rama' } });
  fireEvent.change(email, { target: { value: 'rama@gmail.com' } });
  fireEvent.change(mobile, { target: { value: '7026845253' } });
  fireEvent.change(photo, { target: { value:"" } });

  fireEvent.change(password, { target: { value: '123456789' } });
  fireEvent.change(confirmPassword, { target: { value: '123456789' } });
   fireEvent.click(getByText("Register"));
   await (()=>{

    expect(screen.getByText("Registration is successful")).toHaveBeenCalledTimes(1);
   });
   
   
  
});

test('should display an error message when invalid data is entered', async () => {
   
  const {getByText,getByPlaceholderText,findByText} = render(<Register />);
  const name=getByPlaceholderText("Enter Full Name");
   const photo=getByPlaceholderText("Upload Photo");
   const email=getByPlaceholderText("Enter email Address");
   const mobile=getByPlaceholderText("Enter Phone Number");
   const age=getByPlaceholderText("Enter Age")
   const password = getByPlaceholderText('Enter Password');
   const confirmPassword = getByPlaceholderText('Re Enter Password');
   const food=getByText("Food Pref:");
   const submitButton = getByText('Register');
   
  fireEvent.change(name, { target: { value: 'rama' } });
  fireEvent.change(email, { target: { value: 'rama' } });
  fireEvent.change(mobile, { target: { value: '70268' } });
  fireEvent.change(age, { target: { value:"1" } });

  fireEvent.change(password, { target: { value: '12' } });
  fireEvent.change(confirmPassword, { target: { value: '1234' } });
   fireEvent.click(getByText("Register"));
 
  expect(await findByText('Invalid Email Address')).toBeInTheDocument();
  expect(await findByText('Phone number must be exactly 10 digits')).toBeInTheDocument();
  expect(await findByText('age must be greater than 10')).toBeInTheDocument();
  expect(await findByText('Password must be at least 4 characters')).toBeInTheDocument();
  expect(await findByText('Passwords must match')).toBeInTheDocument();
});
test('for required inputs', async () => {
   
  const {getByText,getByPlaceholderText,findByText} = render(<Register />);
  const name=getByPlaceholderText("Enter Full Name");
   const photo=getByPlaceholderText("Upload Photo");
   const email=getByPlaceholderText("Enter email Address");
   const mobile=getByPlaceholderText("Enter Phone Number");
   const age=getByPlaceholderText("Enter Age")
   const password = getByPlaceholderText('Enter Password');
   const confirmPassword = getByPlaceholderText('Re Enter Password');
   const food=getByText("Food Pref:");
   const submitButton = getByText('Register');
   
  fireEvent.change(name, { target: { value: null } });
  fireEvent.change(email, { target: { value: null } });
  fireEvent.change(mobile, { target: { value: null } });
  fireEvent.change(age, { target: { value:null } });
  fireEvent.change(age, { target: { value:null } });


  fireEvent.change(confirmPassword, { target: { value: null } });
   fireEvent.click(getByText("Register"));
 
  expect(await findByText('Name is required')).toBeInTheDocument();
 
  expect(await findByText('Phone number is required')).toBeInTheDocument();
  expect(await findByText('Password is required')).toBeInTheDocument();
  expect(await findByText('Confirm Password is required')).toBeInTheDocument();
});