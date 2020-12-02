import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { useNode } from "@craftjs/core";
import { Button, ListItem, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    listItemOne: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },

    textField: {

    },
    setButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },

}));

export default () => {
    const classes = useStyles();

    const { intialImage, actions: { setProp } } = useNode(node => ({
        color: node.data.props.color,
        intialImage: node.data.props.imageUrl,
    }));
    const [image, setImage] = useState(intialImage)

    const handleChange = event => {
        event.persist();
        setImage(event.target.value)
    };
    const onSetClicked = () => {
        setProp(props => props.imageUrl = image)
    }

    return (
        <ListItem className={classes.listItemOne}>
            {/* <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="subtitle1"
                        className={classes.text}>
                        Image
                            </Typography>
                    <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}> */}
            <TextField
                className={classes.textField}
                fullWidth
                label="Image Url"
                name="ImageUrl"
                onChange={handleChange}
                type="text"
                value={image}
                variant="outlined"
            />
            <Button
                className={classes.setButton}
                color="primary"
                fullWidth
                size="small"
                type="submit"
                variant="contained"
                onClick={onSetClicked}
            >
                Set Image
                </Button>

            {/* </AccordionDetails>
            </Accordion> */}
        </ListItem>
    )
}