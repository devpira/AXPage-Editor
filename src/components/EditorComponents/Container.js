import React from "react";
import { Resizer } from './Resizer'
import EditorRowSettings from './RowSettings'

const defaultProps = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: { top: '5', right: '5', bottom: '5', left: '5' },
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    background: { r: 249, g: 186, b: 195, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: { topLeft: '0', topRight: '0', bottomRight: '0', bottomLeft: '0' },
    width: '50%',
    height: '20%',
    opacity: 1,
    border: 'none',
    borderWidth: '2',
    borderColor: { r: 0, g: 0, b: 0, a: 1 },
};

export const EditorContainer = (props) => {
    //const { connectors: { connect, drag } } = useNode();

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        flexDirection,
        alignItems,
        justifyContent,
        fillSpace,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        opacity,
        border,
        borderWidth,
        borderColor,
        children,
    } = props;
    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            // ref={ref => connect(drag(ref))}
            style={{
                background: `rgba(${Object.values(background)})`,
                margin: `${margin.top}% ${margin.right}% ${margin.bottom}% ${margin.left}%`,
                opacity,
                boxShadow:
                    shadow == 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
                flex: fillSpace == 'yes' ? 1 : 'unset',
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    flexDirection,
                    display: "flex",
                    justifyContent,
                    alignItems,
                    background: `rgba(${Object.values(background)})`,
                    color: `rgba(${Object.values(color)})`,
                    padding: `${padding.top}% ${padding.right}% ${padding.bottom}% ${padding.left}%`,
                    borderRadius: `${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
                    flex: fillSpace == 'yes' ? 1 : 'unset',
                    opacity,
                    border: `${borderWidth}px ${border} rgba(${Object.values(borderColor)})`
                }}>
                {children}
            </div>
        </Resizer>
    )
}

EditorContainer.craft = {
    displayName: 'Container',
    related: {
        settings: EditorRowSettings
    },
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
}