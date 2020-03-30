/**
 * @Info: This is a container, it is a 'chunk' or a 'view' of the application that holds a chunk of state
 * containers connect to the redux store and pass down information just like any other react component
 */

import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import Header from '../../modules/Header';
import Theme from '../../styles/Theme';

type SomeComponentProps = {
  firstAction: Function,
  clickedText: string,
};

function HomeView({ clickedText, firstAction, ...rest }: SomeComponentProps): React.Node {
  return (
    <>
      {/**
       * Could be good to make use of a 'skeleton' component for reuse accorss different views
       * e.g. this could hold the header, footer and theme etc
       */}
      <Theme />
      <Header clickedText={clickedText} firstAction={firstAction} {...rest} />
      {/** Other modules */}
    </>
  );
}

/**
 * @Info: Data
 */

function mapStateToProps({ appState, homeViewState }) {
  return {
    clickedText: homeViewState.clickedText,
    clientWidth: appState.clientWidth,
  };
}

/**
 * @Info: Functions or 'actions' - note this is a callback that redux uses and gives us the dispatch argument
 * so we can send data to the store
 */
function mapDispatchToProps(dispatch) {
  return {
    firstAction: clickedText => {
      return dispatch(actions.firstAction(clickedText));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
