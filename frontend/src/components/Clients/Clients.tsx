import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/userSlice/user';
import { withReduxStore } from '../../utils/HOC/withReduxStore';

const Clients: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(loginUser('Smok', 'Wawelski'));
        }}
      >
        Click
      </button>
    </div>
  );
};

export default withReduxStore(Clients);
