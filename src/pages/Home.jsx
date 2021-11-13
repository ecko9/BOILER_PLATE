import React from 'react';

import NavBar from 'components/NavBar';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user)
  return (
    <div className="home">
      <NavBar />
      {console.log(user)}
      <h2>Home</h2>
    </div>
  );
};

export default Home;