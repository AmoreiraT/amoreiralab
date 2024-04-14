import { Navigate, useLocation } from 'react-router-dom';
import { isExpired } from 'react-jwt';

import { getLocalStorage } from '@shared/utils/localStorage';
import { pathRoutes } from '../pathRoutes';

interface ProtectedRouteProps {
  component: JSX.Element;
}

export function VerifyNotFound({ component }: ProtectedRouteProps) {
  const { pathname } = useLocation();
  const token = getLocalStorage('@token');

  const tokenValidation = !isExpired(token);
  const paths = Object.values(pathRoutes);

  return (
    <div>
      {tokenValidation ? (
        !paths.includes(pathname) && component
      ) : (
        <Navigate to="/not-authorized" />
      )}
    </div>
  );
}
