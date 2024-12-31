import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProvicerWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({ 
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
 });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProvicerWithNavigate>
          <AppRoutes />
        </Auth0ProvicerWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
