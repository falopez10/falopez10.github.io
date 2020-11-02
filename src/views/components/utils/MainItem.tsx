import {
  Accordion,
  AccordionDetails,
  AccordionSummary,

  makeStyles
} from '@material-ui/core';
import React, { FC } from 'react';

interface Props {
  title: string;
}

export const MainItem: FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        classes={{
          root: classes.summary,
          expanded: classes.summary,
        }}
      >
        <h3>{title}</h3>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles({
  summary: { margin: 0 },
}
);