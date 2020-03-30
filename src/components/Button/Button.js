/**
 * @Info: In this structure, components should be smaller single items that don't contain many other components
 * e.g. Button, Image, Modal, Loader, etc
 */

import React from 'react';
import Button from '@material-ui/core/Button';

type RandomButtonProps = {
  clickHandler: Function,
};

export default function RandomButton({ clickHandler }: RandomButtonProps): React.Node {
  const handleButtonClick = () => {
    clickHandler('Some dummy text');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Click me to print some text to the body
      </Button>
    </div>
  );
}
