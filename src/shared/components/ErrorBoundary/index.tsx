import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  render() {
    const { children } = this.props;
    return children;
  }
}

export { ErrorBoundary };
