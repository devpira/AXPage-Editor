import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { FormControl, Slider, MenuItem, Select, FormLabel, ListItem, Typography, TextField } from '@material-ui/core'
import ColorSelectorButton from '../../ColorPicker'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },

    rowOne: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(1),
    },
    rightColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(1),
    },

    accordion: {
        margin: 0,
        padding: 0,
        width: "100%",
    },

    label: {
        marginBottom: theme.spacing(1),
    },
    formControl: {
        width: "100%",
        marginLeft: theme.spacing(4),
        paddingBottom: theme.spacing(3),
    },
    arial: {
        fontFamily: "Arial"
    },
    arialBlack: {
        fontFamily: '"Arial Black", Gadget, sans-serif'
    },
    timeNewRomen: {
        fontFamily: 'Times New Roman'
    },
    sansSerif: {
        fontFamily: 'sans-serif'
    },
    ComicSan: {
        fontFamily: '"Comic Sans MS", cursive, sans-serif'
    },
    courier: {
        fontFamily: 'Courier'
    },
    monospace: {
        fontFamily: 'monospace'
    },
    lucidaConsole: {
        fontFamily: '"Lucida Console", Monaco, monospace'
    },
    lucidaSans: {
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
    },
    charcoal: {
        fontFamily: 'Charcoal'
    },
    tahoma: {
        fontFamily: 'Tahoma, Geneva, sans-serif'
    },
    trebuchet: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif'
    },
    verdana: {
        fontFamily: 'Verdana, Geneva, sans-serif'
    },

    impact: {
        fontFamily: 'Impact'
    },


}));

export default () => {
    const classes = useStyles();

    const { fontFamily, fontWeight, textAlign, color, fontSize, actions: { setProp } } = useNode(node => ({
        color: node.data.props.color,
        fontSize: node.data.props.fontSize,
        fontFamily: node.data.props.fontFamily,
        fontWeight: node.data.props.fontWeight,
        textAlign: node.data.props.textAlign
    }));



    return (
        <ListItem className={classes.listItemOne}>

            <div className={classes.rowOne}>
                <Typography variant="h6" className={classes.label}>Font Color: </Typography>
                <ColorSelectorButton defaultColor={color} onColorPicked={colorReturned => {
                    setProp(props => props.color = colorReturned)
                }} />

            </div>

            <TextField
                id="outlined-basic"
                label="Font Size"
                value={fontSize}
                variant="outlined"
                className={classes.textField}
                margin={"dense"}
                type="number"
                onChange={(event) => {
                    setProp(props => { props.fontSize = event.target.value; })
                }}
            />
            <Slider value={fontSize} max={100} onChange={(_, newValue) => {
                setProp(props => props.fontSize = newValue)
            }} />


            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel className={classes.label} component="legend"><strong>Font Family</strong></FormLabel>
                <Select
                    value={fontFamily}
                    onChange={(event) => {
                        setProp(props => props.fontFamily = event.target.value)
                    }}
                    displayEmpty
                    className={classes.select}
                >
                    <MenuItem className={classes.arial} value="Arial">Arial</MenuItem>
                    <MenuItem className={classes.arialBlack} value={'"Arial Black", Gadget, sans-serif'}>Arial Black</MenuItem>
                    <MenuItem className={classes.timeNewRomen} value={'Times New Roman'}>Times New Roman</MenuItem>
                    <MenuItem className={classes.sansSerif} value={'sans-serif'}>Sans-serif</MenuItem>
                    <MenuItem className={classes.ComicSan} value={'"Comic Sans MS", cursive, sans-serif'}>Comic Sans MS</MenuItem>
                    <MenuItem className={classes.courier} value={'Courier'}>Courier</MenuItem>
                    <MenuItem className={classes.monospace} value={'monospace'}>Monospace</MenuItem>
                    <MenuItem className={classes.lucidaConsole} value={'"Lucida Console", Monaco, monospace'}>Lucida Console</MenuItem>
                    <MenuItem className={classes.lucidaSans} value={'"Lucida Sans Unicode", "Lucida Grande", sans-serif'}>Lucida Sans Unicode</MenuItem>
                    <MenuItem className={classes.charcoal} value={'Charcoal'}>Charcoal</MenuItem>
                    <MenuItem className={classes.tahoma} value={'Tahoma, Geneva, sans-serif'}>Tahoma</MenuItem>
                    <MenuItem className={classes.trebuchet} value={'"Trebuchet MS", Helvetica, sans-serif'}>Trebuchet MS</MenuItem>
                    <MenuItem className={classes.verdana} value={'Verdana, Geneva, sans-serif'}>Verdana</MenuItem>
                    <MenuItem className={classes.impact} value={'Impact'}>Impact</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel className={classes.label} component="legend"><strong>Font Weight</strong></FormLabel>
                <Select
                    value={fontWeight}
                    onChange={(event) => {
                        setProp(props => props.fontWeight = event.target.value)
                    }}
                    displayEmpty
                    className={classes.select}
                >
                    <MenuItem value="none">Normal</MenuItem>
                    <MenuItem value={'bold'}>Bold</MenuItem>
                    <MenuItem value={'bolder'}>Bolder</MenuItem>
                    <MenuItem value={'lighter'}>Lighter</MenuItem>
                    <MenuItem value={'100'}>100</MenuItem>
                    <MenuItem value={'200'}>200</MenuItem>
                    <MenuItem value={'300'}>300</MenuItem>
                    <MenuItem value={'400'}>400</MenuItem>
                    <MenuItem value={'500'}>500</MenuItem>
                    <MenuItem value={'600'}>600</MenuItem>
                    <MenuItem value={'700'}>700</MenuItem>
                    <MenuItem value={'800'}>800</MenuItem>
                    <MenuItem value={'900'}>900</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel className={classes.label} component="legend"><strong>Text Align</strong></FormLabel>
                <Select
                    value={textAlign}
                    onChange={(event) => {
                        setProp(props => props.textAlign = event.target.value)
                    }}
                    displayEmpty
                    className={classes.select}
                >
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value={'center'}>Center</MenuItem>
                    <MenuItem value={'right'}>Right</MenuItem>
                    <MenuItem value={'justify'}>Justify</MenuItem>
                </Select>
            </FormControl>


        </ListItem >
    )
}