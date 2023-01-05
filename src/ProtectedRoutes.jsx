import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

// Mention that protected routes can be used to to verify that a user has the correct access token for specific routes
const ProtectedRoutes = () => {
  // The useSelector hook accesses the Redux's store state
  const currentUser = useSelector((state) => state.currentUser?.payload?.id); // Returns boolean if there is a currentUser logged in

  return currentUser ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
