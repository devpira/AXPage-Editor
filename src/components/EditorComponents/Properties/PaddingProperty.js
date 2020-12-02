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


    const { padding, actions: { setProp } } = useNode(node => ({
        padding: node.data.props.padding
    }));

    return (
        <ListItem className={classes.listItemOne}>
            <Tooltip title="Padding is the space that wraps the inside components" placement="top">
                <div className={classes.titleHolder}>
                    <Typography
                        variant="body1"
                        className={classes.title}>
                        <strong>Padding</strong>
                    </Typography>
                    <HelpOutlineIcon style={{ fontSize: 15 }} color="action" />
                </div >
            </Tooltip>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Top"
                        value={padding.top}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.padding.top = event.target.value; })
                        }}
                    />
                    <Slider value={padding.top} max={100} onChange={
                        (event, newValue) => {
                            setProp(props => props.padding.top = newValue)
                        }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Right"
                        value={padding.right}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.padding.right = event.target.value; })
                        }}
                    />
                    <Slider value={padding.right} max={100} onChange={(_, newValue) => {
                        setProp(props => props.padding.right = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Bottom"
                        value={padding.bottom}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.padding.bottom = event.target.value; })
                        }}
                    />
                    <Slider value={padding.bottom} max={100} onChange={(_, newValue) => {
                        setProp(props => props.padding.bottom = newValue)
                    }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Left"
                        value={padding.left}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        type="number"
                        onChange={(event) => {
                            setProp(props => { props.padding.left = event.target.value; })
                        }}
                    />
                    <Slider value={padding.left} max={100} onChange={(_, newValue) => {
                        setProp(props => props.padding.left = newValue)
                    }} />
                </div>
            </div>
        </ListItem>
    )
}
