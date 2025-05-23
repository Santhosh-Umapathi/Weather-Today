import React, {useEffect} from 'react';
import {MainNavigator} from './navigation/MainNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {deleteAllData} from './storage';

const queryClient = new QueryClient();

const App = () => {
  // useEffect(() => {
  //   deleteAllData();
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  );
};

export default App;
