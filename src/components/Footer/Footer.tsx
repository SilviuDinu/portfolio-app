import contentService from '@services/content.service';
import './style.scss';

const Footer = () => {
  const footerContent = contentService.getFooter();
  return <footer className='footer flex-row center'>{footerContent}</footer>;
};

export default Footer;
