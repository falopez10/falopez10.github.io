import { Accordion, AccordionDetails, AccordionSummary, createStyles, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

interface Props {
    title: string;
}

export const MainItem: FC<Props> = ({ title }) => {
    const classes = useStyles();
    return (

        <Accordion>
            <AccordionSummary classes={{
                root: classes.summary,
            }}>
                <h3>{title}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p>Content</p>
            </AccordionDetails>

        </Accordion>
    )
}

const useStyles = makeStyles(theme => createStyles({
    summary: { margin: 0 },
}));
