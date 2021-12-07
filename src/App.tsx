import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomThemeProvider } from './contexts/theme';
import { AuthProvider } from './contexts/auth';
import { Routes } from './routes';
import { Provider } from 'react-native-paper';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <CustomThemeProvider>
            <Provider>
              <Routes />
            </Provider>
          </CustomThemeProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
