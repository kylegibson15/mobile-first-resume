import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

interface IMobileMenuButtonProps {
  children: JSX.Element | JSX.Element[];
}

function MobileMenuButton({ children }: IMobileMenuButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label='more' aria-controls='mobile-menu' aria-haspopup='true' onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu id='mobile-menu' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItem>{children}</MenuItem>
      </Menu>
    </div>
  );
}

export default MobileMenuButton;
