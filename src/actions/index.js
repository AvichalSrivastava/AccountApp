import {EMAIL_CHANGE} from './types';

const emailChanged = (text)=>
{
  return({
    type : EMAIL_CHANGE,
    payload : text
  });
}
export default emailChanged;
