import React, { FC, useContext } from 'react'
import { Accordion, Grid } from '@material-ui/core';
import { MainItem } from '../components';
import { DisplayContext } from '../../core/providers';
import { labels } from '../../constants';
export const Main: FC = () => {
    const { language } = useContext(DisplayContext)
    return (
        <Grid container className="fullsize" direction="column">
            <MainItem title={labels[language].ABOUT_ME} />
            <MainItem title={labels[language].EXPERIENCE} />
            <MainItem title={labels[language].EDUCATION} />
            <MainItem title={labels[language].SKILLS} />
            <MainItem title={labels[language].INTERESTS} />
            <MainItem title={labels[language].PROJECTS} />
        </Grid>
    )
}
