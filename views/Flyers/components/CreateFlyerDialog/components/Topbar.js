import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper, IconButton, Button, CircularProgress, Typography } from '@material-ui/core'
import clsx from 'clsx'
import CloseIcon from '@material-ui/icons/Close';
import { useEditor } from "@craftjs/core";
import { BusinessContext } from '../../../../../providers';
import { useCreateAdminFlyer, useUpdateAdminFlyer } from '../../../hooks';
import { pink } from '@material-ui/core/colors';
import lz from "lzutf8";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        // borderColor: theme.palette.sidePanel,
        height: "65px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed"
        //borderBottom: "1px solid grey"
    },

    title: {
        color: "#ffffff",
        textAlign: "center"
    },
    icon: {
        fontSize: "28px"
    },
    closeIcon: {
        marginLeft: theme.spacing(2),
        color: "#ffffff"
    },
    saveButton: {
        marginRight: theme.spacing(2),
        color: "#ffffff"
    },
    buttonWrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: pink[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -19,
    },
}));

const Topbar = ({ className, handleClose, handleOpenSnackBar, title, flyerData }) => {
    const classes = useStyles();
    const { query } = useEditor();

    const [loading, setLoading] = useState(false);

    const { adminBusiness } = useContext(BusinessContext);
    const { createAdminFlyer } = useCreateAdminFlyer();
    const { updateAdminFlyer } = useUpdateAdminFlyer();

    const onSaveClicked = async () => {
        console.log("query:", lz.encodeBase64(lz.compress(query.serialize())))
        setLoading(true);

        if (flyerData) {
            await updateAdminFlyer({
                _id: flyerData._id,
                businessId: adminBusiness._id,
                serializedJSON: lz.encodeBase64(lz.compress(query.serialize())),
                status: flyerData.status,
            }).then((status) => {
                if (status) {
                    window.location.reload();
                    return;
                }
                setLoading(false);
                handleOpenSnackBar("Sorry there was an error creating the flyer. Please try again.")
            }).catch(() => {
                setLoading(false);
                handleOpenSnackBar("Sorry there was an error creating the flyer. Please try again.")
                return false;
            });
        } else {
            await createAdminFlyer({
                businessId: adminBusiness._id,
                serializedJSON: lz.encodeBase64(lz.compress(query.serialize())),
                status: true,
            }).then((status) => {
                if (status) {
                    window.location.reload();
                    return;
                }
                setLoading(false);
                handleOpenSnackBar("Sorry there was an error creating the flyer. Please try again.")
            }).catch(() => {
                setLoading(false);
                handleOpenSnackBar("Sorry there was an error creating the flyer. Please try again.")
                return false;
            });
        }
    };

    return (
        <Paper
            elevation={1}
            square={true}
            className={clsx(classes.root, className)}
        >
            <IconButton className={classes.closeIcon} edge="start" color="inherit" onClick={() => handleClose()} aria-label="close">
                <CloseIcon />
            </IconButton>
            <div className={classes.topAlignSection}>

                <Typography variant="h4" className={classes.title}>
                    <strong>{title}</strong>
                </Typography>
            </div>
            <div className={classes.buttonWrapper}>
                <Button
                    size="large"
                    className={classes.saveButton}
                    autoFocus color="inherit"
                    onClick={onSaveClicked}
                    disabled={loading}
                >
                    Save
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
            {/* <div>
                <Button size="large" className={classes.saveButton} autoFocus color="inherit" onClick={onSaveClicked}>
                    save
                </Button>
            </div> */}
        </Paper>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func
};

export default Topbar;