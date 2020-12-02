import React, { useContext } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import TextSettings from './TextSettings'


import { useTheme } from '@material-ui/styles';
// import { useMediaQuery } from '@material-ui/core';

import { MyEditorContext } from './Providers/MyEditorProvider'

export const EditorText = ({
    fontSize,
    textAlign,
    fontFamily,
    fontWeight,
    color,
    shadow,
    text,
    margin,
}) => {
    const {
        connectors: { connect, drag },
        setProp,
    } = useNode((state) => ({
        dragged: state.events.dragged,
    }));
    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled,
    }));
    const theme = useTheme();
    // const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
    //     defaultMatches: true
    // });

    const { canvasHeight, canvasWidth } = useContext(MyEditorContext)

    console.log("canvasHeight ", canvasHeight)
    console.log("canvasWidth ", canvasWidth)

    return (
        <ContentEditable
            innerRef={(ref) => connect(drag(ref))}
            html={text} // innerHTML of the editable div
            disabled={!enabled}
            onChange={(e) => {
                setProp((prop) => (prop.text = e.target.value), 500);
            }} // use true to disable editing
            tagName="h2" // Use a custom HTML tag (uses a div by default)
            style={{
                width: 'auto',
                margin: `${margin.top}% ${margin.right}% ${margin.bottom}% ${margin.left}%`,
                color: `rgba(${Object.values(color)})`,
                // fontSize: isDesktop ? `${((fontSize / 100) * (0.56 * window.innerHeight)) / 4}px` : `${fontSize / 4}vw`,
                fontSize: `${fontSize / 100 * canvasWidth/4}px`,
                textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
                fontWeight,
                textAlign,
                fontFamily
            }}
        />

    );
};

EditorText.craft = {
    displayName: 'Text',
    props: {
        fontSize: '15',
        textAlign: 'left',
        fontFamily: 'Arial',
        fontWeight: '500',
        color: { r: 92, g: 90, b: 90, a: 1 },
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        shadow: 0,
        text: 'Text',
    },
    related: {
        settings: TextSettings
    },
    rules: {
        canDrag: () => true,
    },
};