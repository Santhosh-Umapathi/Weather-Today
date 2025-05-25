import React from 'react';
import {MainNavigator} from './navigation/MainNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useSplash} from './hooks';

const queryClient = new QueryClient();

const App = () => {
  useSplash();
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  );
};

export default App;
