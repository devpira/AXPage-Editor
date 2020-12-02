import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core'
import { AntTab, AntTabs } from '../../../../../components/Tabs'
import ComponentsEditingPanel from './ComponentsEditingPanel'
import TemplatesEditingPanel from './TemplatesEditingPanel'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: "400px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1,
    },
    tabHolder: {
        backgroundColor: theme.palette.background.paper,
        width: "100%"
    },
    content: {
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: "column",
    }
}));

export default ({ onTemplateSelected }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper className={classes.root} elevation={2} square={true}>
            <div className={classes.tabHolder}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Components" />
                    <AntTab label="Content" />
                    <AntTab label="Templates" />
                </AntTabs>
            </div>
            <div className={classes.content}>
                <ComponentsEditingPanel value={value} index={0} />
                <TemplatesEditingPanel value={value} index={2} onTemplateSelected={onTemplateSelected} />
            </div>
        </Paper >
    );
}