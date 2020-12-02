// components/user/Container.js
import React from "react";
import { Paper} from "@material-ui/core";
import { useNode } from "@craftjs/core";
import MainCanvasSettngs from './MainCanvasSettings'

const defaultProps = {
    alignItems: 'center',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: { top: '0', right: '0', bottom: '0', left: '0' },
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: { topLeft: '0', topRight: '0', bottomRight: '0', bottomLeft: '0' },
};

export const MainCanvas = (props) => {
    const { connectors: { connect, drag } } = useNode();

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        alignItems,
        justifyContent,
        fillSpace,
        padding,
        background,
        color,
        margin,
        shadow,
        radius,
        children,
    } = props;
    return (
        <Paper
            ref={ref => connect(drag(ref))}
            style={{
                display: "flex",
                justifyContent,
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                alignItems,
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding.top}% ${padding.right}% ${padding.bottom}% ${padding.left}%`,
                margin: `${margin.top}% ${margin.right}% ${margin.bottom}% ${margin.left}%`,
                boxShadow:
                    shadow == 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
                flex: fillSpace == 'yes' ? 1 : 'unset',
                borderStyle: 'none'
               
            }}
        >
            {children}
        </Paper>
    )
}

MainCanvas.craft = {
    displayName: 'Main',
    related: {
        settings: MainCanvasSettngs
    },
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
}
