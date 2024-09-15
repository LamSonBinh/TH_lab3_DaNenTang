import React from 'react';
import { Provider } from 'react-redux';
import { DrawerNavigator, TabNavigation } from './components/routes';
import Store from './store';

const App = () => {
  return (
      <Provider store={Store}>
          <TabNavigation />
      </Provider>

  );
}
export default App;