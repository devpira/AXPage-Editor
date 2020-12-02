import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography } from '@material-ui/core'
import { useEditor } from "@craftjs/core";
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: "400px",
        backgroundColor: theme.palette.primary,
        borderColor: theme.palette.sidePanel,
    },

    propertiesHeader: {
        width: "100%",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    unselectedPropBody: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50%"
    },

    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


export default () => {
    const classes = useStyles();
    const { selected, actions } = useEditor((state, query) => {
        const currentNodeId = state.events.selected;
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable()
            };
        }

        return {
            selected
        }
    });

    return (
        <Paper className={classes.root} elevation={2} square={true}>
            {selected ? (
                selected.settings && React.createElement(selected.settings)
            ) :
                <div className={classes.unselectedPropBody}>
                    <Typography variant="body2">
                        Select an element to edit its properties
                         </Typography>
                </div>
            }
        </Paper>
    );
}