import React from "react";
import { Resizer } from './Resizer'
import DividerSettings from './DividerSettings'

const defaultProps = {
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    background: { r: 0, g: 0, b: 0, a: 1 },
    direction: "H",
    width: '100%',
    height: '100%',
    thickness: '0.1',
    opacity: 1,
    shadow: 0,
};

export const EditorDivider = (props) => {

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        background,
        margin,
        shadow,
        opacity,
        thickness,
        direction,
        children,
    } = props;
    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            maxWidth={direction === "V" ? `${thickness}vw` : '100vw'}
            maxHeight={direction === "H" ? `${thickness}vh` : '100vh'}
            allowedSides={[
                'topLeft',
                'topRight',
                'bottomLeft',
                'bottomRight'
            ]}
            style={{
                background: `rgba(${Object.values(background)})`,
                margin: `${margin.top}% ${margin.right}% ${margin.bottom}% ${margin.left}%`,
                opacity,
                boxShadow:
                    shadow == 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: `rgba(${Object.values(background)})`,
                    opacity,
                }}
            >
                {children}
            </div>
        </Resizer>
    )
}


EditorDivider.craft = {
    displayName: 'Divider',
    related: {
        settings: DividerSettings
    },
    props: defaultProps,
    rules: {
        canDrag: () => true,
        canMoveIn: () => false
    },
}
