import { BookOpen, Box, FileText, Lock, Phone } from 'react-feather';

import whatsapp from '../../../public/images/whatsapp.svg';
import mail from '../../../public/images/gmail-logo.svg';
import address from '../../../public/images/address-book.svg';

export const CONTACTS = [
  {
    icon: address,
    text: 'Near Dog Farm, Kaunt Road, Bhiwani',
  },
  {
    icon: whatsapp,
    text: '+91 8222823722, +91 8885800151',
  },
  {
    icon: mail,
    text: 'hindostan23@gmail.com',
  },
];

export const LINKS_STATIC = [
  {
    text: 'Products',
    Icon: Box,
  },
  {
    text: 'About',
    Icon: BookOpen,
  },
  {
    text: 'Contact',
    Icon: Phone,
  },
  {
    text: 'Privacy policy',
    Icon: Lock,
  },
  {
    text: 'Terms and conditions',
    Icon: FileText,
  },
];
