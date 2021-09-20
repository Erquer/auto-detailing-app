import React from 'react';
import {Provider} from "react-redux";
import reduxStore from '../../store/store';

export const withReduxStore = <T,>(Component: React.FC<T>) => (
    (props: T) => {
        return (
            <Provider store={reduxStore}>
                <Component {...props} />
            </Provider>
        );
    }
);