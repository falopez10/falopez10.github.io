import { Grid, Link } from '@material-ui/core';
import React, { FC, Fragment, useContext, useEffect, useState } from 'react';
import { Url } from '../../../constants/Url';
import { labels } from '../../../constants/Label';
import { DisplayContext } from '../../../core/providers/DisplayContext';

interface Interest {
    title: string;
    description: string;
    url?: string;
    imgUrl?: string;
}

export const InterestsContent: FC = () => {
    const { language } = useContext(DisplayContext);
    const [interests, setInterests] = useState<Interest[]>([]);

    useEffect(() => {
        const _labels = labels[language];
        setInterests([
            { title: _labels.MUSIC_TITLE, description: _labels.MUSIC_DESCRIPTION, url: Url.SOUND_CLOUD_LINK, imgUrl: Url.ABLETON },
            { title: _labels.PUZZLES_TITLE, description: _labels.PUZZLES_DESCRIPTION, imgUrl: Url.PUZZLE },
            { title: _labels.BASKETBALL_TITLE, description: _labels.BASKETBALL_DESCRIPTION, imgUrl: Url.BASKETBALL },
        ]);

    }, [language])

    return (
        <Grid container style={{ textAlign: "left" }} alignItems="stretch" spacing={1}>
            {
                interests.map(({ title, description, url, imgUrl }) =>
                    <Fragment>
                        <Grid item xs={4} style={{ minHeight: 115 }}>
                            {
                                imgUrl &&
                                <div
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: "no-repeat",
                                        backgroundImage: `url(${imgUrl})`,
                                        borderRadius: 10,
                                        // margin: theme.spacing(0.5),
                                        height: "100%",
                                    }}
                                />}
                        </Grid>
                        <Grid item xs={8}>
                            <Link target="_blank" href={url}>
                                <h3>{title}</h3>
                            </Link>
                            <p>{description}</p>
                        </Grid>
                    </Fragment>
                )
            }
        </Grid>
    )
}
