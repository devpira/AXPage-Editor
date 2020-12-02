import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, ListItem, TextField, Typography, Slider } from '@material-ui/core'
import ColorSelectorButton from '../../ColorPicker'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    row: {
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
    colorBody: {
        display: "flex",
        marginBottom: theme.spacing(2),
        alignItems: "center"
    },
    label: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    directionFormControl: {
        marginTop: theme.spacing(2),
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
    }
}));

export default () => {
    const classes = useStyles();


    const { width, height, direction, thickness, background, actions: { setProp } } = useNode(node => ({
        width: node.data.props.width,
        height: node.data.props.height,
        direction: node.data.props.direction,
        thickness: node.data.props.thickness,
        background: node.data.props.background,
    }));

    const handleDirectionChange = (event) => {
        setProp(props => props.direction = event.target.value)
        setProp(props => props.width = "100%")
        setProp(props => props.height = "100%")
    };

    return (
        <ListItem className={classes.listItemOne}>
            <div className={classes.colorBody}>
                <Typography variant="h6" className={classes.label}>Divider Color: </Typography>
                <ColorSelectorButton defaultColor={background} onColorPicked={color => {
                    setProp(props => props.background = color)
                }} />
            </div>
            <div className={classes.row}>
                <div className={classes.leftColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Length"
                        value={direction === "H" ? width : height}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        onChange={(event) => {
                            if (direction === "H") {
                                setProp(props => { props.width = event.target.value; })
                            } else {
                                setProp(props => { props.height = event.target.value; })
                            }

                        }}
                    />
                    <Slider
                        value={direction === "H" ? width.slice(0, -1) : height.slice(0, -1)}
                        max={100}
                        onChange={
                            (_, newValue) => {
                                if (direction === "H") {
                                    setProp(props => { props.width = newValue + "%"; })
                                } else {
                                    setProp(props => { props.height = newValue + "%"; })
                                }
                            }} />
                </div>
                <div className={classes.rightColumn}>
                    <TextField
                        id="outlined-basic"
                        label="Thickness"
                        value={thickness}
                        variant="outlined"
                        className={classes.textField}
                        margin={"dense"}
                        onChange={(event) => {
                            setProp(props => { props.thickness = event.target.value; })
                        }}
                    />
                    <Slider value={thickness} min={0.01} step={0.05} max={5} onChange={(_, newValue) => {
                        setProp(props => props.thickness = newValue)
                    }} />
                </div>
            </div>
            <FormControl className={classes.directionFormControl} component="fieldset">
                <FormLabel component="legend"><strong>Direction:</strong></FormLabel>
                <RadioGroup aria-label="direction" name="Direction" className={classes.radioGroup} value={direction} onChange={handleDirectionChange}>
                    <FormControlLabel value={"H"} control={<Radio />} label="Horizontal" />
                    <FormControlLabel value={"V"} control={<Radio />} label="Vertical" />
                </RadioGroup>
            </FormControl>
        </ListItem>
    )
}
