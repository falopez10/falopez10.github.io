import { Grid } from '@material-ui/core';
import React, { FC, useContext } from 'react';
import { labels } from '../../constants';
import { DisplayContext } from '../../core/providers/DisplayContext';
import { ExperienceContent, MainItem, SkillsContent } from '../components';
import { EducationContent } from '../components/education/EducationContent';
export const Main: FC = () => {
  const { language } = useContext(DisplayContext);
  return (
    <Grid container className="fullsize" direction="column">
      <MainItem title={labels[language].ABOUT_ME} />
      <MainItem title={labels[language].EXPERIENCE}>
        <ExperienceContent />
      </MainItem>
      <MainItem title={labels[language].EDUCATION}>
        <EducationContent />
      </MainItem>
      <MainItem title={labels[language].SKILLS}>
        <SkillsContent />
      </MainItem>
      <MainItem title={labels[language].INTERESTS} />
      <MainItem title={labels[language].PROJECTS} />
    </Grid>
  );
};
