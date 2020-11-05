import {
  Accordion,
  AccordionDetails,
  AccordionSummary,

  makeStyles
} from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

interface Props {
  headerContent: ReactNode;
  expanded: boolean;
  onChange: (...args: any[]) => void;
}

export const MainItem: FC<Props> = ({ headerContent, expanded, onChange, children }) => {
  const classes = useStyles();
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        classes={{
          root: classes.summary,
          expanded: classes.summary,
        }}
      >
        {typeof headerContent === "string" ? <h3>{headerContent}</h3> : headerContent}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles({
  summary: { margin: 0 },
}
);
