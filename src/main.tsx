import ReactDOM from 'react-dom/client';
import React from 'react'; // Import i18n.ts
import { QueryClient, QueryClientProvider } from 'react-query'; // theme
import { GlobalStyle } from '@shared/styles/global'; // routes
import { ThemeProvider } from 'styled-components';
import { theme } from '@shared/styles/customTheme';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { Routes } from '@routes/index.routes';
import { getFirebaseApp } from '@core/firebase/firebaseConfig';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

// Import i18n.ts
// import './i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60,
      refetchInterval: 3000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

getFirebaseApp();

function Main() {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Main />
    </DevSupport>
  </React.StrictMode>
);
