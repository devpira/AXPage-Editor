import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { ListItem, TextField, Slider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        display: "flex",

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
    heightTextField: {

    },
    widthTextField: {

    },
}));

export default () => {
    const classes = useStyles();


    const { width, height, actions: { setProp } } = useNode(node => ({
        width: node.data.props.width,
        height: node.data.props.height
    }));

    return (
        <ListItem className={classes.listItemOne}>
            <div className={classes.leftColumn}>
                <TextField
                    id="outlined-basic"
                    label="Height"
                    value={height}
                    variant="outlined"
                    className={classes.textField}
                    margin={"dense"}
                    onChange={(event) => {
                        setProp(props => { props.height = event.target.value; })
                    }}
                />
                <Slider value={height.slice(0, -1)} max={100} onChange={
                    (_, newValue) => {
                        setProp(props => { props.height = newValue + "%"; })
                    }} />
            </div>
            <div className={classes.rightColumn}>
                <TextField
                    id="outlined-basic"
                    label="Width"
                    value={width}
                    variant="outlined"
                    className={classes.textField}
                    margin={"dense"}
                    onChange={(event) => {
                        setProp(props => { props.width = event.target.value; })
                    }}
                />
                <Slider value={width.slice(0, -1)} max={100} onChange={(_, newValue) => {
                    setProp(props => props.width = newValue + "%")
                }} />
            </div>
        </ListItem>
    )
}
