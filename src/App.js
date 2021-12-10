import { GlobalStyle } from './components/global-styles';
import MainNavigator from './components/navigation/main-navigator';
import LoginProvider from './components/context/login-provider';

function App() {
  return (
    <div>
      <LoginProvider>
        <GlobalStyle />
        <MainNavigator />
      </LoginProvider>
    </div>
  );
}

export default App;
