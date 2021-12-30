import { GlobalStyle } from './components/global-styles';
import Navigator from './components/navigation/navigator';
import { UserInfoProvider } from './components/context/user-info-provider';

function App() {
  return (
    <div>
      <UserInfoProvider>
        <GlobalStyle />
        <Navigator />
      </UserInfoProvider>
    </div>
  );
}

export default App;
