import Divider from '@components/Divider/Divider';
import Icon from '@components/Icon/Icon';
import Image from '@components/Image/Image';
import Page from '@components/Page/Page';
import { formatPhoneNumber } from '@helpers/helpers';
import useDimensions from '@hooks/useDimensions';
import contentService from '@services/content.service';
import classNames from 'classnames';
const Contact = () => {
  const { name, email, phone, position, location } = contentService.getContact();
  const socialMediaLinks = contentService.getSocialMediaLinks();
  const currentPosition = contentService.getWorkExperience()?.[0]?.position || position;
  const [isMobile] = useDimensions();

  return (
    <Page className='contact'>
      <div className='contact-info flex-row flex-responsive'>
        <div className='contact-info--image-social flex-column flex-responsive center'>
          <Image
            name='me'
            width={isMobile ? 180 : 220}
            height={isMobile ? 180 : 220}
            lazyLoad={false}
            preload={true}
            alt='picture of Silviu Dinu'
          />
          <div className='social-links flex-row center'>
            {socialMediaLinks?.map(({ icon, name, url }, idx) => (
              <a
                key={idx}
                href={url}
                target='_blank'
                rel='noreferrer'
                title={name}
                className={classNames('no-decoration', { 'mr-6': idx < socialMediaLinks?.length - 1 })}>
                <Icon
                  name={icon}
                  width={3}
                  height={3}
                  className={name}
                />
              </a>
            ))}
          </div>
        </div>
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
              className='social--details--phone social--details--item flex-row no-decoration'>
              <Icon
                name='call_white'
                className='mr-2'
              />
              {formatPhoneNumber(phone)}
            </a>
            <a
              href={`mailto:${email}`}
              className='social--details--email social--details--item flex-row no-decoration'>
              <Icon
                name='email_white'
                className='mr-2'
              />
              {email}
            </a>
            <div className='social--details--location social--details--item flex-row'>
              <Icon
                name='location'
                className='mr-2'
              />
              {location}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Contact;
