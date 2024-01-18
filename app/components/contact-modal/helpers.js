import { CONTACTS } from '../footer/helpers';
import { Map, PhoneCall, Mail } from 'react-feather';

export const validations = {
  name: (value) => {
    if (value.length < 3) {
      return 'Please enter a name more than 3 letters';
    }
  },
  email: (value) => {
    const regex = new RegExp(
      "^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );
    if (!regex.test(value)) {
      return 'Please enter a valid email';
    }
  },
  number: (value) => {
    const regex = new RegExp(
      '^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
    );
    if (!regex.test(value)) {
      return 'Please enter a valid number';
    }
  },
  message: (value) => {
    if (value.length < 3) {
      return 'Please enter a message more than 3 letters';
    }
  },
};
const newIcons = [Map, PhoneCall, Mail];
export const SHOW_CONTACT = CONTACTS.map((value, index) => ({
  ...value,
  icon: newIcons[index],
}));
