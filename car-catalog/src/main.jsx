import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/Home/Home.jsx'
import AppRouter from './components/Router.jsx'
import AuthProvder from './providers/AuthProvier'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvder>
        <AppRouter />
      </AuthProvder>
    </QueryClientProvider>
  </React.StrictMode>,
);
