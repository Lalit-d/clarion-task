import { isEmail, isPassword } from '../../utils/strings';

export const formMembers = {
  emailAddress: '',
  password: '',
};

export function onBlur(name, value) {
  if (name === 'password') return !isPassword(value) && 'Invalid password';
  if (name === 'emailAddress')
    return !isEmail(value) && 'Invalid email address';
  return '';
}
