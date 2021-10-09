import React from 'react';

import { withReduxStore } from '../../../utils/HOC/withReduxStore';

const Clients: React.FC = () => (
  <div>
    <button
      type="button"
      onClick={() => {
        console.log('Dupa');
      }}
    >
      Click
    </button>
  </div>
);
export default withReduxStore(Clients);
