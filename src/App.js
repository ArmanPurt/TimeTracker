import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './services/router';
import {
  AppLayout,
  AppLayoutGlobal,
} from './components/styledComponents/AppLayout/AppLayout';
import { Content } from './components/styledComponents/AppLayout/Content';
import { AppBar } from './components/AppBar/AppBar';
import AppContextSet from './services/AppContext';

function App() {
  const { AppContextProvider } = AppContextSet;
  return (
    <>
      <AppLayoutGlobal />
      <AppContextProvider>
        <Router>
          <AppLayout>
            <AppBar />
            <Content>
              <AppRouter />
            </Content>
          </AppLayout>
        </Router>
      </AppContextProvider>
    </>
  );
}

export default App;
