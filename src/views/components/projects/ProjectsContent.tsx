import { Card, CardContent, createStyles, Grid, IconButton, makeStyles } from '@material-ui/core';
import React, { FC, useContext, useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { labels } from '../../../constants/Label';
import { Url } from '../../../constants/Url';
import { DisplayContext } from '../../../core/providers/DisplayContext';

interface Project {
    title: string;
    description: string;
    url?: string;
}

export const ProjectsContent: FC = () => {
    const classes = useStyles();
    const { language } = useContext(DisplayContext);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const _labels = labels[language];
        setProjects([
            { title: _labels.INSTA_TAGS, description: _labels.INSTA_TAGS_DESCRIPTION, url: Url.INSTA_TAGS_LINK },
            { title: _labels.INFO_COL, description: _labels.INFO_COL_DESCRIPTION, url: Url.INFO_COL_LINK },
            { title: _labels.BIOCICLE, description: _labels.BIOCICLE_DESCRIPTION, url: Url.BIOCICLE_LINK },
        ]);

    }, [language])

    return (
        <div className={classes.root}>
            {
                projects.map(({ title, description, url }) =>
                    <Card className={classes.projectCard}>
                        <CardContent>
                            <Grid container justify="space-between">
                                <h4>{title}</h4>
                                {
                                    url && <IconButton target="_blank" href={url}>
                                        <FaExternalLinkAlt />
                                    </IconButton>
                                }
                            </Grid>
                            <ReactMarkdown>
                                {description}
                            </ReactMarkdown>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    )
}

const useStyles = makeStyles(theme => createStyles({
    root: { textAlign: "left" },
    projectCard: { margin: theme.spacing(1), },
}),
);
