import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { FormControl, Grid, FormLabel, ListItem, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        margin: theme.spacing(1),
    },
    content: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(2),
    },
    formControl: {
        //marginLeft: theme.spacing(4),
        marginLeft: theme.spacing(4),
        paddingBottom: theme.spacing(3),
    },
    gridOne: {
        marginLeft: theme.spacing(2),
    },
    gridTwo: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    }
}));

export default ({ hideDirection = false, hideFillSpace = false }) => {
    const classes = useStyles();

    const { flexDirection, alignItems, justifyContent, fillSpace, actions: { setProp } } = useNode(node => ({
        flexDirection: node.data.props.flexDirection,
        alignItems: node.data.props.alignItems,
        justifyContent: node.data.props.justifyContent,
        fillSpace: node.data.props.fillSpace
    }));

    const handleDirectionChange = (event) => {
        setProp(props => props.flexDirection = event.target.value)
    };

    const handleFillSpaceChange = (event) => {
        setProp(props => props.fillSpace = event.target.value)
    };

    const handleAlignItemsChange = (event) => {
        setProp(props => props.alignItems = event.target.value)
    };

    const handleJustifyContentChange = (event) => {
        setProp(props => props.justifyContent = event.target.value)
    };

    return (
        <ListItem className={classes.listItemOne}>

            <div className={classes.content}>
                <Grid className={classes.gridOne} container direction="row" justify="flex-start" alignItems="center">
                    {!hideDirection ?
                        <FormControl className={classes.formControl} component="fieldset">
                            <FormLabel component="legend"><strong>Direction:</strong></FormLabel>
                            <RadioGroup aria-label="direction" name="Direction" value={flexDirection} onChange={handleDirectionChange}>
                                <FormControlLabel value="row" control={<Radio />} label="Row" />
                                <FormControlLabel value="column" control={<Radio />} label="Column" />
                            </RadioGroup>
                        </FormControl>
                        : null}
                    {!hideFillSpace ?
                        <FormControl className={classes.formControl} component="fieldset">
                            <FormLabel component="legend"><strong>Fill Space:</strong></FormLabel>
                            <RadioGroup aria-label="fill space" name="FillSpace" value={fillSpace} onChange={handleFillSpaceChange}>
                                <FormControlLabel value={'yes'} control={<Radio />} label="Yes" />
                                <FormControlLabel value={'no'} control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        : null}
                </Grid>
                <Grid className={classes.gridTwo} container direction="row" justify="flex-start" alignItems="flex-start">
                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend"><strong>Align Items:</strong></FormLabel>
                        <RadioGroup aria-label="Align Items" name="AlignItems" value={alignItems} onChange={handleAlignItemsChange}>
                            <FormControlLabel value={'flex-start'} control={<Radio />} label="Start" />
                            <FormControlLabel value={'center'} control={<Radio />} label="Center" />
                            <FormControlLabel value={'flex-end'} control={<Radio />} label="End" />
                            <FormControlLabel value={'stretch'} control={<Radio />} label="Stretch" />
                            <FormControlLabel value={'baseline'} control={<Radio />} label="baseline" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className={classes.formControl} component="fieldset">
                        <FormLabel component="legend"><strong>Align Items:</strong></FormLabel>
                        <RadioGroup aria-label="Align Items" name="AlignItems" value={justifyContent} onChange={handleJustifyContentChange}>
                            <FormControlLabel value={'flex-start'} control={<Radio />} label="Start" />
                            <FormControlLabel value={'center'} control={<Radio />} label="Center" />
                            <FormControlLabel value={'flex-end'} control={<Radio />} label="End" />
                            <FormControlLabel value={'space-between'} control={<Radio />} label="Space Between" />
                            <FormControlLabel value={'space-around'} control={<Radio />} label="Space Around" />
                            <FormControlLabel value={'space-evenly'} control={<Radio />} label="Space Evenly" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </div>
        </ListItem>
    )
}
