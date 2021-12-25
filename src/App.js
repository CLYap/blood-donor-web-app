import { GlobalStyle } from './components/global-styles';
import Navigator from './components/navigation/navigator';
import { AuthProvider } from './components/context/auth-context';

function App() {
  return (
    <div>
      <AuthProvider>
        <GlobalStyle />
        <Navigator />
      </AuthProvider>
    </div>
  );
}

export default App;
