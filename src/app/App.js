/**
 * @Info: App is our top level, we define the routing here and we import our containers
 * Note we are making use of the store.dispatch for setting state globally, we could use a saga for our app
 * but generally for this case below we don't really need to
 */

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../containers/HomeView';
import store from './store';
import { actions } from './actions';

function App(): React.Node {
  // This will set the screen with in the store when resising the window
  const handleResponsiveness = () => {
    let timedFn;
    const { dispatch } = store;

    const initResize = () =>
      (timedFn = setTimeout(() => {
        const clientWidth = document.body.clientWidth;
        dispatch(actions.setClientWidth(clientWidth));
      }, 200));

    window.addEventListener('resize', () => {
      clearTimeout(timedFn);
      initResize();
    });

    // Inital load
    initResize();
  };

  // Simple Hoc that makes our rendering a little easier to pass down props
  // when using router.
  const renderWithProps = (Component, ComponetProps) => defaultProps => {
    return <Component {...defaultProps} {...ComponetProps} />;
  };

  useEffect(() => {
    handleResponsiveness();
  }, []);

  // Routes
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
