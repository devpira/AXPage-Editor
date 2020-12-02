import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, Button, Dialog, Slide } from '@material-ui/core';

import TopBar from './components/Topbar';
import EditingPanel from './components/EditingPanel';
import PhonePreviewSection from './components/PhonePreviewSection';
import PropertiesPanel from './components/PropertiesPanel';
import { colors } from '@material-ui/core';
import { Editor } from "@craftjs/core";
import MuiAlert from '@material-ui/lab/Alert';

import { MainCanvas, EditorRow, EditorDivider, HiddenImageContainer, EditorImage, EditorColumn, EditorContainer, EditorCard, EditorText, EditorButton, CardTop, CardBottom } from "../../../../components/EditorComponents"
import RenderNode from '../../../../components/EditorComponents/utils/RenderNode'

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: 'column',

    },
    body: {
        height: '100%',
        width: "100%",
        display: "flex",
        paddingTop: "65px"
    },
    button: {
        backgroundColor: "#ffffff",
        color: colors.purple[500],
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop: theme.spacing(3),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default ({ buttonClassname, buttonText, title, flyerData }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState('')
    const [templateSerializedJSON, setTemplateSerializedJSON] = useState()

    const resetState = () => {
        setTemplateSerializedJSON(null)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        resetState();
        setOpen(false);
    };

    const handleOpenSnackBar = (text) => {
        setSnackbarText(text)
        setOpenSnackbar(true);
    };

    const handleSnackClose = (event, reason) => {
        setOpenSnackbar(false);
    };

    const onTemplateSelected = (value) => {
        setTemplateSerializedJSON(value)
    }

    return (
        <>
            <div>
                <Button className={buttonClassname ? buttonClassname : classes.button} variant="contained" color={"secondary"} onClick={handleClickOpen}>
                    <strong>{buttonText}</strong>
                </Button>
                <Dialog className={classes.root} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <Editor
                        className={classes.root}
                        resolver={{ MainCanvas, EditorRow, EditorDivider, HiddenImageContainer, EditorImage, EditorColumn, EditorCard, EditorButton, EditorText, EditorContainer, CardTop, CardBottom }}
                        onRender={RenderNode}
                    >

                        <TopBar title={title} resetState={resetState} handleClose={handleClose} flyerData={flyerData} handleOpenSnackBar={handleOpenSnackBar} />
                        <div className={classes.body}>
                            {/* <Hidden smDown> */}
                            <EditingPanel onTemplateSelected={onTemplateSelected} />
                            {/* </Hidden> */}
                            <PhonePreviewSection serializedJSON={templateSerializedJSON ? templateSerializedJSON : (flyerData ? flyerData.serializedJSON : null)} />
                            {/* <Hidden smDown> */}
                            <PropertiesPanel />
                            {/* </Hidden> */}
                        </div>
                    </Editor>
                </Dialog>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={20000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="warning">
                    {snackbarText}
                </Alert>
            </Snackbar>
        </>
    );
}