import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, MenuItem, Select, Slider, ListItem, Typography, Divider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ColorSelectorButton from '../../ColorPicker'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
   
    },
    accordion: {
 
        width: "100%",
    },
    accordionDetails: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    formControl: {
      //  marginLeft: theme.spacing(4),
        paddingBottom: theme.spacing(3),
    },
    select: {
        marginBottom: theme.spacing(2),
    },
    label: {
        marginTop: theme.spacing(2),
    }
}));

export default () => {
    const classes = useStyles();

    const { border, borderColor, borderWidth, actions: { setProp } } = useNode(node => ({
        border: node.data.props.border,
        borderColor: node.data.props.borderColor,
        borderWidth: node.data.props.borderWidth
    }));

    return (
        <ListItem className={classes.listItemOne}>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="subtitle1"
                        className={classes.text}>
                        Border
                            </Typography>
                    <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <FormControl fullWidth={true} margin="normal" component="fieldset">
                        <FormLabel component="legend">Border Type</FormLabel>
                        <Select
                            value={border}
                            onChange={(event) => {
                                setProp(props => props.border = event.target.value)
                            }}
                            displayEmpty
                            className={classes.select}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="none">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'solid'}>Solid</MenuItem>
                            <MenuItem value={'dotted'}>Dotted</MenuItem>
                            <MenuItem value={'dashed'}>Dashed</MenuItem>
                            <MenuItem value={'groove'}>Groove</MenuItem>
                            <MenuItem value={'double'}>Double</MenuItem>
                            <MenuItem value={'ridge'}>Ridge</MenuItem>
                            <MenuItem value={'inset'}>Inset</MenuItem>
                            <MenuItem value={'outset'}>Outset</MenuItem>
                        </Select>
                        {border === "none" ? null :
                            <>
                                <FormLabel className={classes.label} component="legend">Color</FormLabel>
                                <ColorSelectorButton defaultColor={borderColor} onColorPicked={color => {
                                    setProp(props => props.borderColor = color)
                                }} />

                                <FormLabel className={classes.label} component="legend">Border Thickness  {borderWidth}</FormLabel>
                                <Slider value={borderWidth} max={100} onChange={(_, newValue) => {
                                    setProp(props => props.borderWidth = newValue)
                                }} />
                            </>}

                    </FormControl>


                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}
