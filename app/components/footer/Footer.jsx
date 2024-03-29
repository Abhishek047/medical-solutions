'use client';
import { Typography } from '../ui/typography/Typography';
import styles from './footer.module.css';
import global from '../../global.module.css';
import Image from 'next/image';
import { FooterHeading } from './FooterHeading';
import { useModalContext } from '@/app/context/contactModalContext';
import { CONTACTS, LINKS_STATIC } from './helpers';

export const ContactInfoSection = () => {
  return (
    <>
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
    </>
  );
};

const Footer = () => {
  const { openModal } = useModalContext();

  const LINKS = LINKS_STATIC.map((item) => {
    return item.text === 'Contact'
      ? {
          ...item,
          handler: openModal,
        }
      : {
          ...item,
          handler: () => {},
        };
  });

  return (
    <div className={styles.container}>
      <div className={`${global['global__container--main']}`}>
        <FooterHeading />
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.about}>
              <Typography type="subheading1">About for us</Typography>
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
              <ContactInfoSection />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles['linksContainer']}>
              <Typography type="subheading1">Services</Typography>
              {LINKS.map((link) => (
                <a
                  key={link.text}
                  onClick={link.handler}
                  className={styles['link-item']}
                >
                  <div className={styles['link-icon']}>
                    <link.Icon className={styles['image-container']} />
                  </div>
                  <Typography
                    key={link.text}
                    className={styles.link}
                    type="body1"
                  >
                    {link.text}
                  </Typography>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
