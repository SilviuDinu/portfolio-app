import { ReactComponent as PhoneIcon } from '@assets/icons/call_white.svg';
import { ReactComponent as EmailIcon } from '@assets/icons/email_white.svg';
// import { ReactComponent as FacebookIcon } from '@assets/icons/facebook-circle.svg';
// import { ReactComponent as GithubIcon } from '@assets/icons/github-logo.svg';
// import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin-circle.svg';
import { ReactComponent as LocationIcon } from '@assets/icons/location.svg';
// import { ReactComponent as TwitterIcon } from '@assets/icons/twitter.svg';
import Divider from '@components/Divider/Divider';
import Image from '@components/Image/Image';
import Page from '@components/Page/Page';
import { formatPhoneNumber } from '@helpers/helpers';
import useDimensions from '@hooks/useDimensions';
import contentService from '@services/content.service';
import './style.scss';

const Contact = () => {
  const { name, email, phone, position, location } = contentService.getContact();
  // const { github } = contentService.getSocialMediaLinks();
  const currentPosition = contentService.getWorkExperience()?.[0]?.position || position;
  const [isMobile] = useDimensions();

  return (
    <Page className='contact'>
      <div className='contact-info flex-row flex-responsive'>
        <Image
          name='me'
          width={isMobile ? 180 : 220}
          height={isMobile ? 180 : 220}
          lazyLoad={false}
          preload={true}
          alt='picture of Silviu Dinu'
        />
        {!isMobile && (
          <Divider
            width={1}
            type='vertical'
          />
        )}
        <div className='social'>
          <div className='social--name-position'>
            <div className='social--name-position--name section-title'>{name}</div>
            <div className='social--name-position--position section-subtitle'>{currentPosition}</div>
          </div>
          <Divider
            height={1}
            type='horizontal'
          />
          <div className='social--details'>
            <a
              href={`callto:${phone}`}
              className='social--details--phone flex-row no-decoration'>
              <PhoneIcon className='mr-2' />
              {formatPhoneNumber(phone)}
            </a>
            <a
              href={`mailto:${email}`}
              className='social--details--email flex-row no-decoration'>
              <EmailIcon className='mr-2' />
              {email}
            </a>
            <div className='social--details--location flex-row'>
              <LocationIcon className='mr-2' />
              {location}
            </div>
          </div>
        </div>
      </div>
      <div className='social-links flex-row center'>
        {/* <GithubIcon />
        <FacebookIcon className='mr-2' /> */}
        {/* <TwitterIcon className='mr-2' /> */}
        {/* <LinkedinIcon className='mr-2' /> */}
      </div>
    </Page>
  );
};

export default Contact;
