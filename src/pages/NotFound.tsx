import React from 'react';
import '../style/notfound.scss'
export const NotFound: React.FC = () => {
  return (
    <div className="root">
      <h1>
        <span>😕</span>
        <br />
      </h1>
      <div style={{marginTop: '1em'}}>Not Found</div>
      <p className="description">
      Unfortunately this page is not available in our online store.
      </p>
    </div>
  );
};