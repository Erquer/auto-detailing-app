import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { clearLoggingState } from '../../../store/slices/userSlice/user';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(clearLoggingState());
    history.push('/login');
  }, []);

  return null;
};

export default Logout;
