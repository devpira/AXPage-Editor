import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, ListItem, Typography, Divider, Slider, Accordion, AccordionSummary, AccordionDetails, Card } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        marginLeft: theme.spacing(4),
    }

}));

export default () => {
    const classes = useStyles();

    const { shadow, actions: { setProp } } = useNode(node => ({
        shadow: node.data.props.shadow
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
                        Shadow
                            </Typography>
                    <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <FormControl fullWidth={true} margin="normal" component="fieldset">
                        <FormLabel component="legend">Level   {shadow}</FormLabel>
                        <Slider value={shadow} max={100} onChange={
                            (_, newValue) => {
                                setProp(props => props.shadow = newValue)
                            }} />

                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}