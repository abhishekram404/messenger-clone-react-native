import React from 'react';

import Conversation from './components/Conversation';
import CreateMessage from './components/CreateMessage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Conversation />
      <CreateMessage />
    </>
  );
};

export default App;
