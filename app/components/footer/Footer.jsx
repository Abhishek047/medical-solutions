import { Typography } from '../ui/typography/Typography';
import styles from './footer.module.css';
import global from '../../global.module.css';
import whatsapp from '../../../public/images/whatsapp.svg';
import mail from '../../../public/images/gmail-logo.svg';
import address from '../../../public/images/address-book.svg';
import Image from 'next/image';
import { BookOpen, Box, FileText, Lock, Phone } from 'react-feather';

const CONTACTS = [
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

const LINKS = [
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

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={`${global['global--container__main']}`}>
        <div className={styles.heading}>
          <Typography gutterBottom={false} type="h3">
            Stay Connected with Us
          </Typography>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.about}>
              <Typography type="subheading1">About us</Typography>
              <Typography type="body1">
                We are a leading provider of high-quality medical solutions
                based in Bhivani, Haryana. With a focus on excellence, we offer
                top-quality products, reliable support, and personalized
                solutions tailored to meet the unique needs of healthcare
                professionals across India.
              </Typography>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.contact}>
              <Typography type="subheading1">Contact</Typography>
              {CONTACTS.map((item) => (
                <div key={item.text} className={styles['icon-pack']}>
                  <div className={styles['image-container']}>
                    <Image src={item.icon} alt="whatsapp-image" fill />
                  </div>
                  <Typography gutterBottom={false} type="body1">
                    {item.text}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles['linksContainer']}>
              <Typography type="subheading1">Services</Typography>
              {LINKS.map((link) => (
                <div className={styles['link-item']}>
                  <div className={styles['link-icon']}>
                    <link.Icon className={styles['image-container']}/>
                  </div>
                  <Typography
                    key={link.text}
                    className={styles.link}
                    type="body1"
                  >
                    {link.text}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;