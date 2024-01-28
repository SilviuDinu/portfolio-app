import Blinker from '@components/Blinker/Blinker';
import Page from '@components/Page/Page';
import './style.scss';

const Home = () => {
  return (
    <Page
      title={
        <Blinker
          as='h1'
          text={"Hi, I'm Silviu"}
          className='title'
        />
      }
      className='home'>
      cucu
    </Page>
  );
};

export default Home;
