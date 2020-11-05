import { Avatar, Container, Grid, IconButton } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import { labels } from '../../../constants/Label';
import { DisplayContext } from '../../../core/providers/DisplayContext';
import { Url } from '../../../constants/Url'
import { FaCodepen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialItems = [
    { title: "Github", Icon: FaGithub, url: Url.GITHUB_LINK },
    { title: "LinkedIn", Icon: FaLinkedin, url: Url.LINKEDIN_LINK },
    { title: "Codepen", Icon: FaCodepen, url: Url.CODEPEN_LINK },
    { title: "Twitter", Icon: FaTwitter, url: Url.TWITTER_LINK },
];

export const AboutMeContent: FC = () => {
    const { language } = useContext(DisplayContext);

    return (
        <Container maxWidth="md" >
            <Grid container>
                <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center">
                    <Avatar src={Url.PROFILE_PICTURE} alt="Fabio Lopez" style={{ width: 125, height: 125 }} />
                    <h2>{labels[language].FABIO_LOPEZ}</h2>
                    <p>Bogotá, Colombia · (+57) 313 353 5729</p>
                    <a href="mailto:fabio.a.lopez@outlook.com">fabio.a.lopez@outlook.com</a>
                </Grid>
                <Grid item xs={12} sm={6} container direction="column" justify="space-evenly"
                    style={{ textAlign: "left" }}
                >
                    <p>{labels[language].FABIO_LOPEZ_DESCRIPTION}</p>
                    <Grid container>
                        {
                            socialItems.map(({ title, Icon, url }) =>
                                <IconButton target="_blank" href={url} title={title} size="medium">
                                    <Icon />
                                </IconButton>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
