import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider, Typography, Button as MaterialButton, Grid, Box, Card, Tooltip } from '@material-ui/core'
import { Element, useEditor } from "@craftjs/core";
import { EditorContainer, EditorRow, EditorDivider, EditorImage, EditorText } from "../../../../../components/EditorComponents"
import CropDinIcon from '@material-ui/icons/CropDin';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Crop169Icon from '@material-ui/icons/Crop169';
import ImageIcon from '@material-ui/icons/Image';
import RemoveIcon from '@material-ui/icons/Remove';
import { Layers } from "@craftjs/layers"
import { TabPanel } from '../../../../../components/Tabs'

const useStyles = makeStyles((theme) => ({
    tabPanel: {
        width: "100%",
        height: '100%',
        display: "flex",
        flexDirection: "column",
    },
    gridContainer: {
        height: "50%",
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: "flex",
        overflowY: "auto"
    },
    gridRowTwo: {
        marginTop: theme.spacing(2),
    },
    layerContainer: {
        display: "flex",
        flexDirection: "column",
        height: "50%",
        width: "100%",
    },
    layerTitle: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    layer: {
        width: "100%",
        overflowY: "auto"
    },
    draggableItem: {
        width: "90px",
        height: "90px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

}));

export default ({ value, index }) => {
    const classes = useStyles();
    const { connectors } = useEditor();

    return (
        <TabPanel value={value} index={index} className={classes.tabPanel}>
            <Grid className={classes.gridContainer} container direction="column" spacing={1}>
                <Box pb={2}>
                    <Typography variant="body1">Drag and drop components to the middle to add</Typography>
                </Box>
                <Grid container justify="space-evenly" item>
                    <Tooltip title="Container to hold components that will align horizontally" aria-label="Container to hold components that will align horizontally" placement="top-start">
                        <Card elevation={2} className={classes.draggableItem} ref={ref => connectors.create(ref, <Element is={EditorRow} canvas />)} >
                            <Crop169Icon style={{ fontSize: 35 }} />
                            <Typography variant="body2">Row</Typography>
                        </Card>
                    </Tooltip>
                    <Tooltip title="Container to hold any component" aria-label="Container to hold any component" placement="top-start">
                        <Card elevation={2} className={classes.draggableItem} ref={ref => connectors.create(ref, <Element is={EditorContainer} canvas />)} >
                            <CropDinIcon style={{ fontSize: 35 }} />
                            <Typography variant="body2">Container</Typography>
                        </Card>
                    </Tooltip>
                    <Tooltip title="Add text" aria-label="Add text" placement="top-start">
                        <Card elevation={2} className={classes.draggableItem} ref={ref => connectors.create(ref, <EditorText />)} >
                            <TextFieldsIcon style={{ fontSize: 35 }} />
                            <Typography variant="body2"> Text</Typography>
                        </Card>
                    </Tooltip>
                </Grid>
                <Grid className={classes.gridRowTwo} container justify="space-evenly" item>
                    <Tooltip title="Image container to display image that can also hold components" aria-label="Image container to display image that can also hold components" placement="top-start">
                        <Card elevation={2} className={classes.draggableItem} ref={ref => connectors.create(ref, <Element is={EditorImage} canvas />)}>
                            <ImageIcon style={{ fontSize: 35 }} />
                            <Typography variant="body2"> Image</Typography>
                        </Card>
                    </Tooltip>
                    <Tooltip title="Image container to display image that can also hold components" aria-label="Image container to display image that can also hold components" placement="top-start">
                        <Card elevation={2} className={classes.draggableItem} ref={ref => connectors.create(ref, <Element is={EditorDivider} canvas />)}>
                            <RemoveIcon style={{ fontSize: 35 }} />
                            <Typography variant="body2"> Divider</Typography>
                        </Card>
                    </Tooltip>
                </Grid>
            </Grid>
            <div className={classes.layerContainer} >
                <Typography className={classes.layerTitle} variant="h5"><strong>Layers</strong></Typography>
                <Divider />
                <div className={classes.layer}>
                    <Layers />
                </div>
            </div>
        </TabPanel>
    );
}