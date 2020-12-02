import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TabPanel } from '../../Tabs'

const useStyles = makeStyles(() => ({
    tabPanel: {
        width: "100%",
        height: '100%',
        display: "flex",
        flexDirection: "column",

    },

}));

export default ({ value, index, children }) => {
    const classes = useStyles();

    return (
        <TabPanel value={value} index={index} className={classes.tabPanel}>
            {children}
        </TabPanel>
    );
}