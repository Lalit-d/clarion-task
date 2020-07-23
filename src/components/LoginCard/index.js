import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmail, isPassword } from '../../utils/strings';
import { Container, Section, TextField, Button, Error, ButtonWrapper } from './styles';
import { formMembers, onBlur } from './constants';

function LoginCard (){
  const [form, setForm] = useState(formMembers);
  const history = useHistory();

  const onChangeText = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onBlurText = e => {
    const { name, value } = e.target;
    const errorKey = `${name}Error`;
    setForm({
      ...form,
      [errorKey]: onBlur(name, value),
    });
  };

  const onFocusText = e => {
    const { name } = e.target;
    const errorKey = `${name}Error`;
    setForm({
      ...form,
      [errorKey]: '',
    });
  };

  const onLoginAction = () => {
    history.push("/dashboard");
    sessionStorage.setItem('user', emailAddress);
  }

  const {
  emailAddress,
  password,
  emailAddressError,
  passwordError,
} = form;

const isDisabled = !!(
  emailAddress === '' ||
  emailAddress !== 'Clarion@clarion.com' ||
  password === '' ||
  password !=='Clarion123' ||
  !isEmail(emailAddress) ||
  !isPassword(password)
);
  return(
    <Container>
      <Section>
        <label>Email Address</label>
        <TextField
          type="text"
          name="emailAddress"
          placeholder="Enter Email"
          value={emailAddress}
          onChange={onChangeText}
          onBlur={onBlurText}
          onFocus={onFocusText}
        />
        {emailAddressError!=='' && <Error>{emailAddressError}</Error>}
        <label>Password</label>
        <TextField
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangeText}
          onBlur={onBlurText}
          onFocus={onFocusText}
        />
        {passwordError!=='' && <Error>{passwordError}</Error>}
        <ButtonWrapper>
         <Button type="submit" disabled={isDisabled} onClick={onLoginAction}>Login</Button>
        </ButtonWrapper>
    </Section>
  </Container>
  );

}

export default LoginCard;
