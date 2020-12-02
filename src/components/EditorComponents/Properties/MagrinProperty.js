import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { Tooltip, ListItem, Typography, Slider, TextField } from '@material-ui/core'
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
    textField: {
        // width: "20%"
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

    const { margin, actions: { setProp } } = useNode(node => ({
        margin: node.data.props.margin
    }));

    return (
        <ListItem className={classes.listItemOne}>
            <Tooltip title="Margin is the space surronding the component" placement="top">
                <div className={classes.titleHolder}>
                    <Typography
                        variant="body1"
                        className={classes.title}>
                        <strong>Margin</strong>
                    </Typography>
                    <HelpOutlineIcon style={{ fontSize: 15 }} color="action" />
                </div >
            </Tooltip>


            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Top"
                        value={margin.top}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.margin.top = event.target.value; })
                        }}
                    />
                    <Slider value={margin.top} min={-100} max={100} onChange={
                        (event, newValue) => {
                            setProp(props => props.margin.top = newValue)
                        }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Right"
                        value={margin.right}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.margin.right = event.target.value; })
                        }}
                    />
                    <Slider value={margin.right} min={-100} max={100} onChange={(_, newValue) => {
                        setProp(props => props.margin.right = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Bottom"
                        value={margin.bottom}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.margin.bottom = event.target.value; })
                        }}
                    />
                    <Slider value={margin.bottom} min={-100} max={100} onChange={(_, newValue) => {
                        setProp(props => props.margin.bottom = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Left"
                        value={margin.left}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.margin.left = event.target.value; })
                        }}
                    />
                    <Slider value={margin.left} min={-100} max={100} onChange={(_, newValue) => {
                        setProp(props => props.margin.left = newValue)
                    }} />
                </div>
            </div>
        </ListItem>
    )
}
