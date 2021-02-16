import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import { useIntl } from 'react-intl';

import useStyles from './styles';
import { messages } from '../../../translations';

function PagesButtonGroup() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <ButtonGroup variant='text' style={{ height: '25px' }}>
      <Button>
        <Link className={classes.link} to='/projects'>
          {intl.formatMessage(messages.resume_section_title_projects)}
        </Link>
      </Button>
      <Button>
        <Link className={classes.link} to='/resume'>
          {intl.formatMessage(messages.landing_page_link_to_resume)}
        </Link>
      </Button>
    </ButtonGroup>
  );
}

export default PagesButtonGroup;
