import React from "react";
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core'
import AlignmentProperties from './Properties/AlignmentProperties'
import BackgroundColorProperty from './Properties/BackgroundColorProperty'
import MagrinProperty from './Properties/MagrinProperty'
import PaddingProperty from './Properties/PaddingProperty'
import RadiusProperty from './Properties/RadiusProperty'
import ShadowProperty from './Properties/ShadowProperty'
import DimensionProperty from './Properties/DimensionProperty'
import BorderProperty from './Properties/BorderProperty'
import BaseSetting from './Base/BaseSetting'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    list: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        // <div className={classes.root} >
        <BaseSetting alignmentChildren={<AlignmentProperties />}>
            <List aria-label="properties list" className={classes.list}>
                <BackgroundColorProperty />
                <DimensionProperty />
                <MagrinProperty />
                <PaddingProperty />
                <RadiusProperty />
                <ShadowProperty />
                <BorderProperty />
                {/* <MagrinProperty />
                
              
                <AlignmentProperties />
                
                */}
                {/* 
        
         
          
          
           
             */}
            </List>
        </BaseSetting>

        // </div>
    )
}

