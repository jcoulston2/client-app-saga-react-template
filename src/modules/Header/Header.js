/**
 * @Info: A module is just a structure that contains smaller components, a header is a good example here
 * as this might be made up of a few different components
 */

import React from 'react';
import Button from '../../components/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

type HeaderProps = {
  firstAction: Function,
  clickedText: string,
  clientWidth: number,
};

// Example of styling a component
const StyledPaper = styled(Paper)`
  padding: 2em;
`;

const StyledPaperVariant = styled(Paper)`
  padding: 1em;
  margin: 1.5em;
`;

const StyledButton = styled(Button)`
  padding: 1em;
`;

// Example of styling regular nodes
const StyledDiv = styled.div`
  padding: 5em;
  margin: auto;
  text-align: center;
`;

const StyledHeader = styled.header`
  background: white;
  padding: 2em 0.1em;
  box-shadow: 5px -12px 41px 9px lightgrey;
`;

export default function Header({ firstAction, clickedText, clientWidth }: HeaderProps): React.Node {
  return (
    <StyledHeader>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <StyledPaper>
            <p>Header Item 1</p>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <p>Header Item 2</p>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledButton clickHandler={firstAction} />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid>
          <StyledPaperVariant>
            <p>
              Resize window to print the width here. Client width is currently: <b>{clientWidth}</b>
            </p>
          </StyledPaperVariant>
        </Grid>
      </Grid>
      {clickedText && (
        <StyledDiv>
          <p>{clickedText}</p>
        </StyledDiv>
      )}
    </StyledHeader>
  );
}
