import { GlobalStyle } from './components/global-styles';
import Navigator from './components/navigation/navigator';
import LoginProvider from './components/context/login-provider';

function App() {
  return (
    <div>
      <LoginProvider>
        <GlobalStyle />
        <Navigator />
      </LoginProvider>
    </div>
  );
}

export default App;
