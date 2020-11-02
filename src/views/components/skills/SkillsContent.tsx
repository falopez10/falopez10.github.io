import { Grid, LinearProgress } from '@material-ui/core';
import React, { FC } from 'react';

const skills = [
  { name: 'Java', value: 70 },
  { name: 'Javascript', value: 80 },
  { name: 'React', value: 70 },
  { name: 'Angular', value: 60 },
  { name: 'NodeJS', value: 70 },
  { name: 'Flutter', value: 30 },
];

export const SkillsContent: FC = () => {
  return (
    <Grid container alignItems="center">
      {
        skills.map(({ name, value }) =>
          <Grid item xs={12} sm={6} container>
            <Grid item xs={2}>
              <h5>{name}</h5>
            </Grid>
            <Grid item xs={10}>
              <LinearProgress variant="determinate" value={value} />
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
};
