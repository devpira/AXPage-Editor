import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core'
import { TabPanel } from '../../../../../components/Tabs'
import { Card } from 'antd';
import 'antd/dist/antd.css';

import { useQuery } from '@apollo/react-hooks'
import { adminFlyerTemplates } from '../../../../../utils/graphql/queries'
import LoadingScreen from '../../../../../components/LoadingScreen'

const useStyles = makeStyles((theme) => ({
    tabPanel: {
        width: "100%",
        height: '100%',
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        scrollbarColor: theme.palette.primary.main,
        scrollbarWidth: "1px",
        '&::-webkit-scrollbar': {
            width: '0.2em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    gridContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
    cardText: {

    },
    gridItem: {
        padding: theme.spacing(1),
    },


}));

export default ({ value, index, onTemplateSelected }) => {
    const classes = useStyles();

    const { loading, data, error } = useQuery(adminFlyerTemplates)

    if (loading) {
        return <LoadingScreen />
    }

    if (error || !data || !data.adminFlyerTemplates || data.adminFlyerTemplates.length === 0) {
        return "Unexpected Error Occurred"
    }

    return (
        <TabPanel value={value} index={index} className={classes.tabPanel}>
            <div className={classes.gridContainer} >

                <Typography className={classes.title} variant="body1">Select a template to use</Typography>

                <Grid className={classes.gridRow} container item justify="space-evenly" direction="row" >
                    {data.adminFlyerTemplates.map((template, index) => {
                        return <Grid key={index} container item xs={6} justify="center">
                            <Card
                                hoverable
                                onClick={() => { onTemplateSelected(template.serializedJSON); }}
                                style={{
                                    width: "72%", height: "150px", marginTop: "10px",
                                    border: `${1}px ${'solid'} rgba(${Object.values({ r: 0, g: 0, b: 0, a: 1 })})`
                                }}

                            >
                                <Typography className={classes.cardText} variant="h5"><strong>{template.name}</strong></Typography>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </div>
        </TabPanel>
    );
}