import React from "react";
import { makeStyles } from '@material-ui/styles';
import { AntTabs, AntTab } from '../../Tabs/'
import BaseSettingTabPanel from './BaseSettingTabPanel'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: "column",
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
        overflowY: "auto",

    }
}));

export default ({ children, alignmentChildren, decorationChildren }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    let counter = 0;
    const components = []

    if (children) {
        components.push(<BaseSettingTabPanel value={value} index={counter}> {children}</BaseSettingTabPanel>);
        counter = counter + 1;
    }

    if (alignmentChildren) {
        components.push(<BaseSettingTabPanel value={value} index={counter}> {alignmentChildren}</BaseSettingTabPanel>);
        counter = counter + 1;
    }

    if (decorationChildren) {
        components.push(<BaseSettingTabPanel value={value} index={counter}> {decorationChildren}</BaseSettingTabPanel>);
        counter = counter + 1;
    }


    return (
        <div className={classes.root}>
            <div className={classes.tabHolder}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    {children ? <AntTab label="Properties" /> : null}
                    {alignmentChildren ? <AntTab label="Alignment" /> : null}
                    {decorationChildren ? <AntTab label="Decorations" /> : null}
                </AntTabs>
            </div>
            <div className={classes.content}>
                {components.map((item) => {
                    return item
                })}
            </div>
        </div>
    )
}

