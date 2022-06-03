import { CircularProgress } from "@material-ui/core"

import useStyles from "../../hooks/useStyles";

const Loading = () => {

    const classes = useStyles();

    return (
        <div className={classes.load}>
            <CircularProgress />
        </div>
    )
}

export default Loading;