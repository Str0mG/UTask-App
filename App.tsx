import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/Components/Tab/Tab';
import { ThemeProvider } from './src/themes/Theme';


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <TabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
