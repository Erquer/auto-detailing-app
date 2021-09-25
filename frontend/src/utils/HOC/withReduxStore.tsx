import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from '../../store/store';

/* eslint-disable */

export const withReduxStore =
  <T,>(Component: React.FC<T>) =>
  (props: T) =>
    (
      <Provider store={reduxStore}>
        <Component {...props} />
      </Provider>
    );
