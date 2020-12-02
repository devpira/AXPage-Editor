import React from "react";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import ColorPicker from 'material-ui-color-picker'
import { Resizer } from './Resizer'

const defaultProps = {
    alignItems: 'center',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: ['5', '5', '5', '5'],
    margin: ['0', '0', '0', '0'],
    background: { r: 224, g: 247, b: 250, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    width: 'auto',
    height: '100%',
};

export const EditorColumn = (props) => {
    const { connectors: { connect, drag } } = useNode();

    props = {
        ...defaultProps,
        ...props,
    };
    const {
        alignItems,
        justifyContent,
        fillSpace,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        children,
    } = props;
    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            ref={ref => connect(drag(ref))}
            minHeight="100%"
            style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent,
                alignItems,
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow == 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
                flex: fillSpace == 'yes' ? 1 : 'unset',
            }}
        >
            {children}
        </Resizer>
    )
}


const EditorColumnSettings = () => {
    const { background, padding, actions: { setProp } } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding
    }));
    return (
        <div>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Background</FormLabel>
                <ColorPicker defaultValue={background || '#000'} onChange={color => {
                    setProp(props => props.background = color)
                }} />
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Padding</FormLabel>
                <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
            </FormControl>
        </div>
    )
}


EditorColumn.craft = {
    displayName: 'Column',
    related: {
        settings: EditorColumnSettings
    },
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
}
