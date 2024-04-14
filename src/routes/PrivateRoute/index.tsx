import { Navigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';

import { getLocalStorage } from '@shared/utils/localStorage';

interface ProtectedRouteProps {
  component: JSX.Element;
}

export function PrivateRoute({ component }: ProtectedRouteProps) {
  const token = getLocalStorage('@token');

  const tokenValidation = !isExpired(token);

  return (
    <div style={{ height: '100%' }}>
      {!tokenValidation ? <Navigate to="/not-authorized" /> : component}
    </div>
  );
}
