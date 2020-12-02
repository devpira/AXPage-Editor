import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { Tooltip, ListItem, Typography, Slider, TextField, } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    content: {
        width: "100%",
        display: "flex",
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(0),
    },
    titleHolder: {
        display: "flex",
        alignItems: "center"
    },
    title: {
        marginRight: theme.spacing(0.5),
    },
    leftColumn: {
        display: "flex",
        flexDirection: "column",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    rightColumn: {
        display: "flex",
        flexDirection: "column",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },

}));

export default () => {
    const classes = useStyles();

    const { radius, actions: { setProp } } = useNode(node => ({
        radius: node.data.props.radius
    }));

    return (
        <ListItem className={classes.listItemOne}>
            <Tooltip title="Border Radius rounds the corners of the component" placement="top">
                <div className={classes.titleHolder}>
                    <Typography
                        variant="body1"
                        className={classes.title}>
                        <strong>Border Radius</strong>
                    </Typography>
                    <HelpOutlineIcon style={{ fontSize: 15 }} color="action" />
                </div >
            </Tooltip>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Top Left"
                        value={radius.topLeft}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.radius.topLeft = event.target.value; })
                        }}
                    />
                    <Slider value={radius.topLeft} max={100} onChange={
                        (_, newValue) => {
                            setProp(props => props.radius.topLeft = newValue)
                        }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Top Right"
                        value={radius.topRight}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.radius.topRight = event.target.value; })
                        }}
                    />
                    <Slider value={radius.topRight} max={100} onChange={(_, newValue) => {
                        setProp(props => props.radius.topRight = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Bot Right"
                        value={radius.bottomRight}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.radius.bottomRight = event.target.value; })
                        }}
                    />
                    <Slider value={radius.bottomRight} max={100} onChange={(_, newValue) => {
                        setProp(props => props.radius.bottomRight = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Bot Left"
                        value={radius.bottomLeft}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.radius.bottomLeft = event.target.value; })
                        }}
                    />
                    <Slider value={radius.bottomLeft} max={100} onChange={(_, newValue) => {
                        setProp(props => props.radius.bottomLeft = newValue)
                    }} />
                </div>
            </div>
        </ListItem>
    )
}
