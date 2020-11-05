import { Grid } from '@material-ui/core';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { labels } from '../../constants/Label';
import { DisplayContext } from '../../core/providers/DisplayContext';
import { ExperienceContent, MainItem, SkillsContent } from '../components';
import { AboutMeContent } from '../components/aboutMe/AboutMeContent';
import { EducationContent } from '../components/education/EducationContent';
import { InterestsContent } from '../components/interests/InterestsContent';
import { ProjectsContent } from '../components/projects/ProjectsContent';

interface Item {
  key: string;
  headerContent: ReactNode;
  content: ReactNode;
}

export const Main: FC = () => {
  const { language } = useContext(DisplayContext);
  const [mainItems, setMainItems] = useState<Item[]>([]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    const labelMap = labels[language];
    setMainItems([
      { key: "ABOUT_ME", headerContent: labelMap.ABOUT_ME, content: <AboutMeContent /> },
      { key: "EXPERIENCE", headerContent: labelMap.EXPERIENCE, content: <ExperienceContent /> },
      { key: "EDUCATION", headerContent: labelMap.EDUCATION, content: <EducationContent /> },
      { key: "SKILLS", headerContent: labelMap.SKILLS, content: <SkillsContent /> },
      { key: "INTERESTS", headerContent: labelMap.INTERESTS, content: <InterestsContent /> },
      { key: "PROJECTS", headerContent: labelMap.PROJECTS, content: <ProjectsContent /> },
    ]);
  }, [language]);

  const handleChange = (index: number) => (event: React.ChangeEvent<any>, newExpanded: boolean) => {
    setExpandedIndex(newExpanded ? index : -1);
  };

  return (
    <Grid container className="fullsize" direction="column">
      {
        mainItems.map(({ headerContent, content, key }, index) =>
          <MainItem {...{
            headerContent,
            key,
            expanded: index === expandedIndex,
            onChange: handleChange(index)
          }}>
            {content}
          </MainItem>
        )
      }
    </Grid>
  );
};
