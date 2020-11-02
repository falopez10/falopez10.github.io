import { Grid, LinearProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { FaAngular, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
const skills = [
  { name: 'React', value: 70, Icon: FaReact, color: "#48CEF7", },
  { name: 'Angular', value: 60, Icon: FaAngular, color: "#C3002F", },
  { name: 'NodeJS', value: 70, Icon: FaNodeJs, color: "#4F934E", },
  { name: 'Javascript', value: 80, Icon: FaJs, color: "#EFD81D", },
  { name: 'Java', value: 70, Icon: FaJava, color: "#E70400", },
  { name: 'Python', value: 30, Icon: FaPython, color: "#356993", },
  { name: 'Flutter', value: 30, Icon: SiFlutter, color: "#5AC3EF", },
];

export const SkillsContent: FC = () => {

  return (
    <Grid container alignItems="center">
      {
        skills.map(({ name, value, Icon, color }, index) =>
          <Grid key={name} item xs={12} sm={6} container justify="center" alignItems="center">
            <Grid item xs={2}>
              <Icon title={name} color={color} fontSize="2rem" />
            </Grid>
            <Grid item xs={10}>
              <LinearProgress
                title={`${value}%`}
                variant="determinate"
                value={value}
                color={index % 2 ? "secondary" : "primary"}
              />
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
};
