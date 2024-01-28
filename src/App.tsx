import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { Content } from '@services/contentService';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

export const App = ({ content = '' }: { content: Content }) => {
  return (
    <div className='page-container'>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};
