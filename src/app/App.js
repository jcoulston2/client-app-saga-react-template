/**
 * @Info: App is our top level, we define the routing here and we import our containers
 */

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../containers/HomeView';
import store from './store';
import { actions } from './actions';

function App(): React.Node {
  /**
   * @Info: This is just a simple listener that triggers on a window resize and sets the client with
   * in the store, note for this case we are not using a saga, just a simple store dispatch which
   * can also be used.
   */

  const handleResponsiveness = () => {
    let timedFn;
    const { dispatch } = store;

    const initResize = () =>
      (timedFn = setTimeout(() => {
        const clientWidth = document.body.clientWidth;

        // this is the common way to dispatch to the store via the native dispatch method that redux provides
        // however when dispatching to the store below container level, we should use a saga
        dispatch(actions.setClientWidth(clientWidth));
      }, 200));

    window.addEventListener('resize', () => {
      clearTimeout(timedFn);
      initResize();
    });

    // Inital load
    initResize();
  };

  useEffect(() => {
    handleResponsiveness();
  }, []);

  // Routes
  return (
    <Switch>
      <Route path="/" exact>
        <HomeView />
      </Route>
    </Switch>
  );
}

export default App;
