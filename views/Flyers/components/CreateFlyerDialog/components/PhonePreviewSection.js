import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core'
import { MainCanvas } from "../../../../../components/EditorComponents"
import { Frame, Element } from "@craftjs/core";
import lz from "lzutf8";
import { MyEditorProvider } from '../../../../../components/EditorComponents/Providers/MyEditorProvider'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        flex: 1,
        backgroundColor: '#F4F6F8',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
        }
    },
    card: {
        display: "flex",
        width: "53.437499vh",
        height: "95%",
        [theme.breakpoints.down('sm')]: {
            width: "56.437499vh",
            height: "100%",
        }
    },
    frame: {
        display: "flex",
        height: '100%',
        width: "100%"
    }

}
));

export default ({ serializedJSON }) => {
    const classes = useStyles();
    const canvasRef = useRef(null)

    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasWidth, setCanvasWidth] = useState(0)

    useEffect(() => {
        if (canvasRef.current) {
            setCanvasHeight(canvasRef.current.clientHeight)
            setCanvasWidth(canvasRef.current.clientWidth)
        }
    }, [canvasRef])


    return (
        <div className={classes.root} >
            <Card ref={canvasRef} className={classes.card} >
                <MyEditorProvider
                    canvasHeight={canvasHeight}
                    canvasWidth={canvasWidth}
                >
                    <Frame className={classes.frame}
                        key={serializedJSON}
                        data={serializedJSON ? lz.decompress(lz.decodeBase64(serializedJSON)) : null}
                    >
                        <Element className={classes.frame} is={MainCanvas} canvas></Element>
                    </Frame>
                </MyEditorProvider>
            </Card>
        </div>
    );
}