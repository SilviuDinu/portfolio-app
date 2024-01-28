import Header from '@components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

export const App = () => {
  return (
    <div className='page-container'>
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
};
