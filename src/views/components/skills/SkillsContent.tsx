import { Grid, LinearProgress } from "@material-ui/core"
import { FC } from "react"

const skills = [
    { name: "Java", value: 70, },
    { name: "Javascript", value: 80, },
    { name: "React", value: 70, },
    { name: "Angular", value: 60, },
    { name: "NodeJS", value: 70, },
    { name: "Flutter", value: 70, },
    { name: "Flutter", value: 70, },
];

export const SkillsContent: FC = () => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={2}>
                <h5>React</h5>
            </Grid>
            <Grid item xs={10}>
                <LinearProgress variant="determinate" value={60} />
            </Grid>
        </Grid>
    )
}
