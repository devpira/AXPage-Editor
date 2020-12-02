import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { Typography, ListItem } from '@material-ui/core'

import ColorSelectorButton from '../../ColorPicker'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
    },

    content: {

        display: "flex",
        // justifyContent: "flex-start",
        alignItems: "center"
    },
    label: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));

export default () => {
    const classes = useStyles();

    const { background, actions: { setProp } } = useNode(node => ({
        background: node.data.props.background,
    }));



    return (
        <ListItem className={classes.listItemOne}>
            <div className={classes.content}>
                <Typography variant="h6" className={classes.label}>Background Color: </Typography>
                <ColorSelectorButton defaultColor={background} onColorPicked={color => {
                    setProp(props => props.background = color)
                }} />
            </div>
        </ListItem>
    )
}
