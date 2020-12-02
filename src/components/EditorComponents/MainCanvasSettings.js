import React from "react";
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core'
import AlignmentProperties from './Properties/AlignmentProperties'
import BackgroundColorProperty from './Properties/BackgroundColorProperty'
import PaddingProperty from './Properties/PaddingProperty'
import BaseSetting from './Base/BaseSetting'

const useStyles = makeStyles((_) => ({
    root: {
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    list: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        // <div className={classes.root} >
        <BaseSetting >
            <List aria-label="properties list" className={classes.list}>
                <BackgroundColorProperty />
                <PaddingProperty />
                <AlignmentProperties hideDirection={true} hideFillSpace={true} />
            </List>
        </BaseSetting>
        // </div>
    )
}
