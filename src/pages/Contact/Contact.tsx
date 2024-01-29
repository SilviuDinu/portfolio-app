import ProfileImage from '@assets/images/me.jpg';
import Divider from '@components/Divider/Divider';
import Page from '@components/Page/Page';
import './style.scss';

const Contact = () => {
  return (
    <Page className='contact'>
      <div className='contact-info flex-row flex-responsive space-between'>
        <img
          src={ProfileImage}
          alt='picture of Silviu Dinu'
        />
        <Divider
          width={1}
          type='vertical'
        />
        <div className='social'>cucu</div>
      </div>
    </Page>
  );
};

export default Contact;
