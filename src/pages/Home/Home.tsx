import Blinker from '@components/Blinker/Blinker';
import Page from '@components/Page/Page';
import contentService from '@services/content.service';
import './style.scss';

const Home = () => {
  const { title } = contentService.getHomepage();
  return (
    <Page
      title={
        <Blinker
          as='h1'
          text={title}
          className='title'
        />
      }
      className='home'>
      <div className='work-experience'></div>
    </Page>
  );
};

export default Home;
