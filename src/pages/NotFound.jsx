import React from 'react';

import NavBar from 'components/NavBar';

const NotFound = () => {
  return (
    <div className="not-found">
      <NavBar />

      <h2>ERROR 404: Page Not Found ...</h2>
    </div>
  );
};

export default NotFound;