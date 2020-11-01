import { FC, useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import {
    Timeline, TimelineConnector, TimelineContent, TimelineDot,
    TimelineItem, TimelineOppositeContent, TimelineSeparator
} from '@material-ui/lab'
import { DisplayContext } from '../../../core/providers';
import { formatMonthCustom } from '../../../core/services';
import { labels } from '../../../constants';

interface ExperienceItem {
    id: string;
    title: string;
    place: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imageUrl?: string;
    placeUrl?: string;
}

// const timelineItems:TimelineItem[] 

export const ExperienceContent: FC = () => {
    const { language } = useContext(DisplayContext);

    const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        const _labels = labels[language];
        const now = new Date();
        setExperienceItems([
            {
                id: "MENIU_FULLSTACK",
                place: _labels.MENIU,
                title: _labels.MENIU_TITLE,
                description: _labels.MENIU_DESCRIPTION,
                startDate: new Date(2019, 1, 1),
                endDate: now,
            },
            {
                id: "LEAL_FULLSTACK",
                place: _labels.LEAL,
                title: _labels.LEAL_TITLE,
                description: _labels.LEAL_DESCRIPTION,
                startDate: new Date(2019, 1, 14),
                endDate: new Date(2020, 2, 14),
            },
            {
                id: "UNIANDES_RA",
                place: _labels.UNIANDES,
                title: _labels.UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_TITLE,
                description: _labels.UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_DESCRIPTION,
                startDate: new Date(2018, 8, 1),
                endDate: new Date(2018, 12, 1),
            },
            {
                id: "MENIU_ALPINA",
                place: _labels.ALPINA,
                title: _labels.ALPINA_INTERSHIP_TITLE,
                description: _labels.ALPINA_INTERSHIP_DESCRIPTION,
                startDate: new Date(2017, 8, 8),
                endDate: new Date(2018, 2, 8),
            },
            {
                id: "UNIANDES_TA",
                place: _labels.UNIANDES,
                title: _labels.UNIANDES_TA_TITLE,
                description: _labels.UNIANDES_TA_DESCRIPTION,
                startDate: new Date(2016, 8, 1),
                endDate: new Date(2018, 12, 1),
            },


        ])
    }, [language]);

    return (
        <Grid container className="fullsize" justify="center">
            <Timeline align="alternate">
                {
                    experienceItems.map(({ id, title, place, description, startDate, endDate }) =>
                        <TimelineItem key={id}>
                            <TimelineOppositeContent>
                                <p>{formatMonthCustom(startDate, language)} - {formatMonthCustom(endDate, language)}</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>{title}</h3>
                                <h4>{place}</h4>
                                <p>{description}</p>
                            </TimelineContent>
                        </TimelineItem>)

                }
            </Timeline>
        </Grid>
    )
}
