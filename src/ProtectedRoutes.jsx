import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const currentUser = useSelector((state) => state.currentUser?.payload?.id);

  return currentUser ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
