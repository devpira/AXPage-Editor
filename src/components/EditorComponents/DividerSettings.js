import React from "react";
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core'
import MagrinProperty from './Properties/MagrinProperty'
import DividerProperty from './Properties/DividerProperty'

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
        <BaseSetting >
            <List aria-label="properties list" className={classes.list}>
                <DividerProperty />
                {/* <DimensionProperty /> */}
                <MagrinProperty />

            </List>
        </BaseSetting>
    )
}
