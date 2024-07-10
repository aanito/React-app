import React, { useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';

function PopoverButtons() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Button 1
      </Button>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Button 2
      </Button>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Button 3
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

export default PopoverButtons;
