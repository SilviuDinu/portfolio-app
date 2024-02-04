import contentService from '@services/content.service';
const Footer = () => {
  const footerContent = contentService.getFooter();
  return <footer className='footer flex-row center'>{footerContent}</footer>;
};

export default Footer;
