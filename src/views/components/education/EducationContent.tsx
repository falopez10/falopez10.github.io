import { createStyles, Grid, makeStyles } from '@material-ui/core';
import { FC, useContext, useEffect, useState } from 'react';
import { labels } from '../../../constants';
import { DisplayContext } from '../../../core/providers';
import { formatMonthCustom } from '../../../core/services';

interface EducationItem {
    id: string;
    title: string;
    place: string;
    description?: string;
    endDate: Date;
}

export const EducationContent: FC = () => {
    const classes = useStyles();
    const { language } = useContext(DisplayContext);

    const [educationItems, setEducationItems] = useState<EducationItem[]>([]);


    useEffect(() => {
        const _labels = labels[language];

        setEducationItems([
            {
                id: "COLLEGE_DEGREE",
                title: _labels.COLLEGE_DEGREE,
                place: _labels.UNIANDES,
                description: _labels.SYSTEMS_ENGINEERING_DESCRIPTION,
                endDate: new Date(2018, 12, 1),
            },
            {
                id: "HIGH_SCHOOL",
                title: _labels.HIGH_SCHOOL_DEGREE,
                place: _labels.SAN_CARLOS,
                endDate: new Date(2014, 6, 1)
            },
        ]);
    }, [language])

    return (
        <div className={classes.root}>
            {
                educationItems.map(({ id, title, place, description, endDate }) =>
                    <Grid
                        key={id}
                        container direction="column" justify="space-around"
                        className={classes.itemContainer}
                    >
                        <div>
                            <Grid container justify="space-between">
                                <h3>{place}</h3>
                                <h4 className={classes.date}>{formatMonthCustom(endDate, language)}</h4>
                            </Grid>
                            <h4 className={classes.title}>{title}</h4>
                        </div>
                        {description && <p>{description}</p>}
                    </Grid>
                )
            }
        </div>
    )
}

const useStyles = makeStyles(theme => createStyles({
    root: { width: "100%" },
    itemContainer: { margin: theme.spacing(1, 0) },
    title: { textTransform: "uppercase" },
    date: { fontStyle: "italic", color: theme.palette.secondary.main },
}));

