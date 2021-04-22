import React from 'react';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import '@styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: '#fff',
          },
        }}
      />
    </>
  );
};

export default App;
